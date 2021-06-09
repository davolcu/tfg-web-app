// Interface for the Attribute instances of the list
export interface IAttribute {
  [key: string]: string;
}

// Interface for the Metadata instance
export interface IMetadata {
  name: string;
  id: string;
  description?: string;
  attributeList: IAttribute[];
}

// Interface for the Entity instances
export interface IEntity {
  [key: string]: string;
}

// Interface for the Entity List data async response
export interface IEntitiesData {
  Metadata: IMetadata;
  Count: number;
  Items: IEntity[];
  ScannedCount: number;
}

// Interface for the Entity Instance data async response
export interface IEntityData {
  Metadata: IMetadata;
  Item: IEntity;
}
