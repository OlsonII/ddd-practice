export interface IRepository<T> {
    saveData(entity: T): Promise<T>;
    searchData(id: any): Promise<T>;
    searchAll(): Promise<T[]>;
}
