import React from "react";
import PropertyHeader from "./PropertyHeader";
import PropertyCard from "./PropertyCard";

type CityType = {
  title: string;
  description: string;
  properties: Array<PropertyType>;
};

export type PropertyType = {
  imageUrl: string;
  beds: number;
  baths: number;
  title: string;
  price: number;
  reviewCount: number;
  rating: number;
  index?: number;
};

export default class PropertyList extends React.Component<CityType> {
  render() {
    return (
      <div className="mt-6">
        <PropertyHeader title={this.props.title} description={this.props.description} />

        <div className="mt-6 sm:overflow-x-auto sm:overflow-y-hidden">
          <div className="px-4 sm:inline-flex sm:pt-2 sm:pb-8 xl:px-8">
            {this.props.properties.map((property, index) => (
              <PropertyCard
                key={index}
                index={index}
                imageUrl={property.imageUrl}
                beds={property.beds}
                baths={property.baths}
                title={property.title}
                price={property.price}
                reviewCount={property.reviewCount}
                rating={property.rating}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}
