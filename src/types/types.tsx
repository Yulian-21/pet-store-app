export interface ICategory{
    id: number;
    name: string
}

export interface ITag{
    id: number
    name: string
}

export interface IPet{
    id: number
    name: string
    category: ICategory
    photoUrls: Array<string>
    tags: Array<ITag>
    status: string
}

export interface IOrder{
    id: number
    petId: number
    quantity: number
    shipDate: string
    status: string
    complete: boolean
}