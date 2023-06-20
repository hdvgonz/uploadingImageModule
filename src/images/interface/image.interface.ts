import { Document } from 'mongoose';

export interface Images extends Document {
  fileName: string;
}
