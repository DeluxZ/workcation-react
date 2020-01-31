import React from "react";
import { PropertyType } from "./PropertyList";
import ReviewRating from "./ReviewRating";

export default class PropertyCard extends React.Component<PropertyType> {
  render() {
    return (
      <div className={`sm:mt-0 sm:w-80 sm:flex-shrink-0 ${this.props.index !== undefined && this.props.index > 0 ? "mt-10 sm:ml-4" : ""}`}>
        <div>
          <div className="relative pb-5/6">
            <img className="absolute inset-0 h-full w-full rounded-lg shadow-md object-cover" src={this.props.imageUrl} alt="" />
          </div>
          <div className="relative px-4 -mt-16">
            <div className="bg-white rounded-lg px-4 py-4 shadow-lg">
              <div className="flex items-baseline">
                <span className="inline-block px-2 py-1 leading-none bg-teal-200 text-teal-800 rounded-full font-semibold uppercase tracking-wide text-xs">
                  Plus
                </span>
                <div className="ml-2 text-xs text-gray-600 font-semibold uppercase tracking-wide">
                  {this.props.beds === 1 ? `${this.props.beds} bed` : `${this.props.beds} beds`} &bull;
                  {this.props.baths === 1 ? ` ${this.props.baths} bath` : ` ${this.props.baths} baths`}
                </div>
              </div>
              <h4 className="mt-1 text-gray-900 font-semibold text-lg">{this.props.title}</h4>
              <div className="mt-1">
                <span className="text-gray-900">
                  {new Intl.NumberFormat("nl-NL", {
                    style: "currency",
                    currency: "EUR"
                  }).format(this.props.price / 100)}
                </span>
                <span className="ml-1 text-sm text-gray-600">/ wk</span>
              </div>
              <div className="mt-2 flex items-center text-sm text-gray-600">
                <ReviewRating rating={this.props.rating} />
                <span className="ml-2">{this.props.reviewCount} reviews</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
