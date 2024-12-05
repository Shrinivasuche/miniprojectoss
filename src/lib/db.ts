import { openDB, DBSchema } from 'idb';
import { format } from 'date-fns';

interface PetitionDB extends DBSchema {
  petitions: {
    key: number;
    value: {
      id: number;
      title: string;
      description: string;
      created_at: string;
    };
    indexes: { 'by-date': string };
  };
  signatures: {
    key: number;
    value: {
      id: number;
      petition_id: number;
      name: string;
      signed_at: string;
    };
    indexes: { 'by-petition': number };
  };
}

const dbPromise = openDB<PetitionDB>('petitions-db', 1, {
  upgrade(db) {
    const petitionStore = db.createObjectStore('petitions', {
      keyPath: 'id',
      autoIncrement: true,
    });
    petitionStore.createIndex('by-date', 'created_at');

    const signatureStore = db.createObjectStore('signatures', {
      keyPath: 'id',
      autoIncrement: true,
    });
    signatureStore.createIndex('by-petition', 'petition_id');
  },
});

export interface Petition {
  id: number;
  title: string;
  description: string;
  created_at: string;
  signatures_count: number;
}

export interface Signature {
  id: number;
  petition_id: number;
  name: string;
  signed_at: string;
}

export const createPetition = async (
  title: string,
  description: string
): Promise<Petition> => {
  const db = await dbPromise;
  const created_at = format(new Date(), 'yyyy-MM-dd HH:mm:ss');
  
  const id = await db.add('petitions', {
    title,
    description,
    created_at,
  });
  
  return {
    id,
    title,
    description,
    created_at,
    signatures_count: 0,
  };
};

export const getAllPetitions = async (): Promise<Petition[]> => {
  const db = await dbPromise;
  const petitions = await db.getAll('petitions');
  const signatures = await db.getAll('signatures');
  
  return petitions.map(petition => ({
    ...petition,
    signatures_count: signatures.filter(s => s.petition_id === petition.id).length,
  }));
};

export const getPetition = async (id: number): Promise<Petition | undefined> => {
  const db = await dbPromise;
  const petition = await db.get('petitions', id);
  
  if (!petition) return undefined;
  
  const signatures = await db.getAllFromIndex('signatures', 'by-petition', id);
  
  return {
    ...petition,
    signatures_count: signatures.length,
  };
};

export const signPetition = async (
  petition_id: number,
  name: string
): Promise<Signature> => {
  const db = await dbPromise;
  const signed_at = format(new Date(), 'yyyy-MM-dd HH:mm:ss');
  
  const signature = {
    petition_id,
    name,
    signed_at,
  };
  
  const id = await db.add('signatures', signature);
  
  return {
    id,
    ...signature,
  };
};

export const getPetitionSignatures = async (
  petition_id: number
): Promise<Signature[]> => {
  const db = await dbPromise;
  return db.getAllFromIndex('signatures', 'by-petition', petition_id);
};