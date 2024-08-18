import type { Schema, Attribute } from '@strapi/strapi';

export interface ItemResponsaveis extends Schema.Component {
  collectionName: 'components_item_responsaveis';
  info: {
    displayName: 'responsaveis';
    icon: 'walk';
    description: '';
  };
  attributes: {
    convidado: Attribute.Relation<
      'item.responsaveis',
      'oneToOne',
      'plugin::users-permissions.user'
    >;
    quantidade: Attribute.Float & Attribute.Required;
  };
}

export interface ItemItems extends Schema.Component {
  collectionName: 'components_item_items';
  info: {
    displayName: 'Items';
    icon: 'file';
    description: '';
  };
  attributes: {
    categoria: Attribute.Relation<
      'item.items',
      'oneToOne',
      'api::categoria.categoria'
    >;
    nome: Attribute.String & Attribute.Required;
    quantidade: Attribute.Float & Attribute.Required;
    responsaveis: Attribute.Component<'item.responsaveis', true>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'item.responsaveis': ItemResponsaveis;
      'item.items': ItemItems;
    }
  }
}
