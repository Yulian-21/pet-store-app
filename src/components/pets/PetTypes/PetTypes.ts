import { Control, FieldValues } from "react-hook-form";

export interface ICategory {
  id?: number;
  name: string;
}

export interface ITag {
  id?: number;
  name: string;
}

export interface IPet {
  id?: number;
  name: string;
  category: ICategory;
  photoUrls: Array<string>;
  tags: Array<ITag>;
  status: string;
}

export type PetItemPageParams = {
  id: string;
};

export type PetByTagParams = {
  tag: string;
};

export type PetByStatusParams = {
  status: string;
};

export type handleData = {
  id: number;
  name: string;
  photoUrls: string;
  category: string;
  status: string;
  tags: ITag[];
};

export enum Status {
  Available = "available",
  Pending = "pending",
  Sold = "sold",
}

export type partialData = {
  id: number;
  name: string;
  status: string;
};

export type selectProps = {
  control: Control<FieldValues, any>;
  name: string;
};
