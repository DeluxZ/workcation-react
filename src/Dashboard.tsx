import React from "react";
import SearchFilters from "./components/SearchFilters";
import Navbar from "./components/Navbar";
import PropertyList from "./components/properties/PropertyList";
// import logo from "./assets/img/logo.svg";
// import women from "./assets/img/beach-work.jpg";
// import { Link } from "react-router-dom";

const data = [
  {
    title: "Los Angeles",
    description: "Live like the stars in these luxurious Southern California estates.",
    properties: [
      {
        imageUrl: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        beds: 3,
        baths: 2,
        title: "Modern home in city center",
        price: 190000.0,
        reviewCount: 34,
        rating: 4
      },
      {
        imageUrl: "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        beds: 4,
        baths: 1,
        title: "Quiet living outside the city",
        price: 175000.0,
        reviewCount: 12,
        rating: 3
      },
      {
        imageUrl: "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80",
        beds: 5,
        baths: 4,
        title: "Renovated apartment uptown",
        price: 200000.0,
        reviewCount: 54,
        rating: 5
      },
      {
        imageUrl: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        beds: 3,
        baths: 2,
        title: "Family home in the suburbs",
        price: 115000.0,
        reviewCount: 34,
        rating: 4
      }
    ]
  },
  {
    title: "Phoenix",
    description: "Escape the cold and enjoy great weather without breaking the bank.",
    properties: [
      {
        imageUrl: "https://images.unsplash.com/photo-1447958272669-9c562446304f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80",
        beds: 3,
        baths: 2,
        title: "Modern home in city center",
        price: 190000.0,
        reviewCount: 34,
        rating: 4
      },
      {
        imageUrl: "https://images.unsplash.com/photo-1475855581690-80accde3ae2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80",
        beds: 4,
        baths: 1,
        title: "Quiet living outside the city",
        price: 175000.0,
        reviewCount: 12,
        rating: 3
      },
      {
        imageUrl: "https://images.unsplash.com/photo-1472224371017-08207f84aaae?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        beds: 5,
        baths: 4,
        title: "Renovated apartment uptown",
        price: 200000.0,
        reviewCount: 54,
        rating: 5
      },
      {
        imageUrl: "https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        beds: 3,
        baths: 2,
        title: "Family home in the suburbs",
        price: 115000.0,
        reviewCount: 34,
        rating: 4
      }
    ]
  },
  {
    title: "Dallas",
    description: "Experience Texas living in these awesome ranch-style homes.",
    properties: [
      {
        imageUrl: "https://images.unsplash.com/photo-1471231681582-352356ab45a0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80",
        beds: 3,
        baths: 2,
        title: "Modern home in city center",
        price: 190000.0,
        reviewCount: 34,
        rating: 4
      },
      {
        imageUrl: "https://images.unsplash.com/photo-1533779283484-8ad4940aa3a8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80",
        beds: 4,
        baths: 1,
        title: "Quiet living outside the city",
        price: 175000.0,
        reviewCount: 12,
        rating: 3
      },
      {
        imageUrl: "https://images.unsplash.com/photo-1432303492674-642e9d0944b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        beds: 5,
        baths: 4,
        title: "Renovated apartment uptown",
        price: 200000.0,
        reviewCount: 54,
        rating: 5
      },
      {
        imageUrl: "https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        beds: 3,
        baths: 2,
        title: "Family home in the suburbs",
        price: 115000.0,
        reviewCount: 34,
        rating: 4
      }
    ]
  }
];

export default class Dashboard extends React.Component<{}, { isFiltersOpen: boolean }> {
  state = { isFiltersOpen: false };

  constructor(props: any) {
    super(props);
    this.filtersHandler = this.filtersHandler.bind(this);
  }

  filtersHandler() {
    this.setState({
      isFiltersOpen: !this.state.isFiltersOpen
    });
  }

  render() {
    return (
      <div className="min-h-screen bg-gray-200 antialiased xl:flex xl:flex-col xl:h-screen">
        <Navbar />
        <div className="xl:flex-1 xl:flex xl:overflow-y-hidden">
          <section className="bg-gray-800 xl:w-72 xl:h-full">
            <div className="flex justify-between px-4 py-3 xl:hidden">
              <div className="relative max-w-xs w-full">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <svg className="h-6 w-6 fill-current text-gray-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.32 14.9l1.1 1.1c.4-.02.83.13 1.14.44l3 3a1.5 1.5 0 0 1-2.12 2.12l-3-3a1.5 1.5 0 0 1-.44-1.14l-1.1-1.1a8 8 0 1 1 1.41-1.41l.01-.01zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
                  </svg>
                </div>
                <input
                  className="block w-full bg-gray-900 focus:outline-none focus:bg-white focus:text-gray-900 text-white rounded-lg pl-10 pr-4 py-2"
                  placeholder="Search by keywords"
                />
              </div>
              <button
                type="button"
                onClick={() =>
                  this.setState({
                    isFiltersOpen: !this.state.isFiltersOpen
                  })
                }
                className={`ml-4 inline-flex items-center hover:bg-gray-600 focus:outline-none focus:shadow-outline rounded-lg shadow pl-3 pr-4 ${
                  this.state.isFiltersOpen ? "bg-gray-600" : "bg-gray-700"
                }`}
              >
                <svg className="h-6 w-6 fill-current text-gray-500" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 6a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1zm3 6a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1zm4 5a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2h-4z" />
                </svg>
                <span className="ml-1 text-white font-medium">Filters</span>
              </button>
            </div>
            <SearchFilters open={this.state.isFiltersOpen} action={this.filtersHandler} />
          </section>
          <main className="py-6 xl:flex-1 xl:overflow-x-hidden">
            {data.map(city => (
              <PropertyList key={city.title} title={city.title} description={city.description} properties={city.properties} />
            ))}
          </main>
        </div>
      </div>
    );
  }
}
