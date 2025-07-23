import type { Schema, Struct } from '@strapi/strapi';

export interface ResourceSteps extends Struct.ComponentSchema {
  collectionName: 'components_resource_steps';
  info: {
    displayName: 'steps';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    file: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    order: Schema.Attribute.Integer & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'resource.steps': ResourceSteps;
    }
  }
}
