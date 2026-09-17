export class Recipe {
  _name!: string;
  _category?: string;
  _descripcion?: string;

  constructor(aName: string) {
    this.name = aName;
  }

  get name(): string {
    return this._name;
  }

  set name(aName: string) {
    const trimmed = aName.trim();
    if (trimmed.length === 0) {
      throw new Error("El nombre de la receta no puede ser vacío.");
    }
    this._name = trimmed;
  }

  get category(): string | undefined {
    return this._category;
  }

  set category(aCategory: string) {
    this._category = aCategory;
  }

  get descripcion(): string | undefined {
    return this._descripcion;
  }
  set descripcion(aDesc: string) {
    this._descripcion = aDesc;
  }

  toString(): string {
    return `Receta: ${this.name} - categoría: ${this.category} - descripción: ${this.descripcion}`;
  }
}
