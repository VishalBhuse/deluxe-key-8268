import { Box, Image } from "@chakra-ui/react";
import React from "react";

export const NavbarSecond = () => {
  const jobs = [
    "Data entry & Back office",
    "Sales & Marketing",
    "BPO & Telecaller",
    "Driver",
    "Office Assistant",
    "Delivery & Collection",
    "Teacher",
    "Cook",
    "Receptionist & Front office",
    "Operator & Technician",
    "IT Engineer & Developer",
    "Hotel & Travel Executive",
    "Accountant",
    "Designer",
    "Other Jobs",
  ];
  const bikes = ["Motorcycles", "Scooters", "pare Parts", "Bicycles"];
  const electronic = [
    "TVs, Video - Audio",
    "Kitchen & Other Appliances",
    "Computers & Laptops",
    "Cameras & Lenses",
    "Games & Entertainment",
    "Fridges",
    "Computer Accessories",
    "Hard Disks, Printers & Monitors",
    "ACs",
    "Washing Machines",
  ];
  const books = [
    "Books",
    "Gym & Fitness",
    "Musical Instruments",
    "Sports Equipment",
    "Other Hobbies",
  ];
  const furniture = [
    "Sofa & Dining",
    "Beds & Wardrobes",
    "Home Decor & Garden",
    "Kids Furniture",
    "Other Household Items",
  ];
  const pets = [
    "Fishes & Aquarium",
    "Pet Food & Accessories",
    "Dogs",
    "Other Pets",
  ];
  const services = [
    "    Electronics & Computer",
    "Education & Classes",
    "Drivers & Taxi",
    "Health & Beauty",
    "Other Services",
  ];


  return (
    <div>
      <nav className="navbar navbar-expand-lg  shadow-sm">
        <a
          href="kk#"
          className="navbar-brand font-weight-bold d-block d-lg-none"
        >
          All Categories
        </a>
        <button
          type="button"
          data-toggle="collapse"
          data-target="#navbarContent"
          aria-controls="navbars"
          aria-expanded="false"
          aria-label="Toggle navigation"
          className="navbar-toggler navbar-light"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div id="navbarContent" className="collapse navbar-collapse">
          <ul className="navbar-nav">
            <li className="nav-item dropdown megamenu onlelinehead">
              <a
                id="megamneu"
                href="kk"
                data-toggle="dropdown"
                // aria-haspopup="true"
                aria-expanded="false"
                className="nav-link dropdown-toggle font-weight-bold text-uppercase"
              >
                All Categories
              </a>
              <div
                aria-labelledby="megamneu"
                className="dropdown-menu border-0 p-0 m-0"
              >
                <div className="container-fluid">
                  <div className="row bg-white rounded-0 m-0 shadow-sm">
                    <div className="col-lg-6 col-xl-6">
                      <div className="p-4">
                        <div className="row">
                          <div className="col-lg-6 mb-4">
                            <h6 className="h6heading">
                              OLX Autos (Cars)
                            </h6>
                            <h6 className=" mt-5 h6heading">
                              Properties
                            </h6>
                            <ul className="list-unstyled">
                              <li className="nav-item">
                                <a
                                  href="kk"
                                  className="nav-link text-small pb-0"
                                >
                                  For Sale: Houses & Apartments
                                </a>
                              </li>
                              <li className="nav-item">
                                <a
                                  href="kk"
                                  className="nav-link text-small pb-0"
                                >
                                  For Rent: Houses & Apartments
                                </a>
                              </li>
                              <li className="nav-item">
                                <a
                                  href="kk"
                                  className="nav-link text-small pb-0"
                                >
                                  Lands & Plots
                                </a>
                              </li>
                              <li className="nav-item">
                                <a
                                  href="kk"
                                  className="nav-link text-small pb-0"
                                >
                                  For Rent: Shops & Offices
                                </a>
                              </li>
                              <li className="nav-item">
                                <a
                                  href="kk"
                                  className="nav-link text-small pb-0"
                                >
                                  For Sale: Shops & Offices
                                </a>
                              </li>
                              <li className="nav-item">
                                <a
                                  href="kk"
                                  className="nav-link text-small pb-0"
                                >
                                  PG & Guest Houses
                                </a>
                              </li>
                            </ul>
                            <div className="row">
                            <div className="col-12 mt-5">
                            <h6 className="h6heading">Mobiles</h6>
                            <ul className="list-unstyled">
                              <li className="nav-item">
                                <a
                                  href="kk"
                                  className="nav-link text-small pb-0 "
                                >
                                  Mobile Phones
                                </a>
                              </li>
                              <li className="nav-item">
                                <a
                                  href="kk"
                                  className="nav-link text-small pb-0 "
                                >
                                  Accessories
                                </a>
                              </li>
                              <li className="nav-item">
                                <a
                                  href="kk"
                                  className="nav-link text-small pb-0 "
                                >
                                  Tablets
                                </a>
                              </li>
                              <li className="nav-item">
                                <a
                                  href="kk"
                                  className="nav-link text-small pb-0 "
                                >
                                  Account
                                </a>
                              </li>
                            </ul>
                          </div>

                            </div>
                          </div>
                          <div className="col-lg-6 mb-4">
                            <h6 className=" h6heading">
                              Jobs
                            </h6>
                            <ul className="list-unstyled">
                              {jobs.map((links) => (
                                <li className="nav-item" key={links}>
                                  <a
                                    href="kk"
                                    className="nav-link text-small pb-0 "
                                  >
                                    {links}
                                  </a>
                                </li>
                              ))}
                            </ul>
                            <div className="row">
                            <div className="col-12 mt-4">
                            <h6 className="h6heading">
                              Bikes
                            </h6>
                            <ul className="list-unstyled">
                              {bikes.map((links) => (
                                <li className="nav-item" key={links}>
                                  <a
                                    href="kk"
                                    className="nav-link text-small pb-0 "
                                  >
                                    {links}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>

                            </div>
                          </div>
                      
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-xl-6 ">
                      <div className="p-4">
                        <div className="row">
                          <div className="col-lg-6 mb-4">
                            <h6 className="h6heading">
                              Electronics & Appliances
                            </h6>
                            <ul className="list-unstyled">
                              {electronic.map((links) => (
                                <li className="nav-item" key={links}>
                                  <a
                                    href="kk"
                                    className="nav-link text-small pb-0 "
                                  >
                                    {links}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className="col-lg-6 mb-4">
                            <h6 className="h6heading">
                              Fashion
                            </h6>
                            <ul className="list-unstyled">
                              <li className="nav-item">
                                <a
                                  href="kk"
                                  className="nav-link text-small pb-0 "
                                >
                                  Men
                                </a>
                              </li>
                              <li className="nav-item">
                                <a
                                  href="kk"
                                  className="nav-link text-small pb-0 "
                                >
                                  Women
                                </a>
                              </li>
                              <li className="nav-item">
                                <a
                                  href="kk"
                                  className="nav-link text-small pb-0 "
                                >
                                  Kids
                                </a>
                              </li>
                            </ul>

                            <div className="row mt-5">
                              <div className="col-12">
                                <h6 className="h6heading">
                                  Books, Sports & Hobbies
                                </h6>
                                <ul className="list-unstyled">
                                  {books.map((links) => (
                                    <li className="nav-item" key={links}>
                                      <a
                                        href="kk"
                                        className="nav-link text-small pb-0 "
                                      >
                                        {links}
                                      </a>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 mb-4">
                            <h6 className="h6heading">
                              Commercial Vehicles & Spares
                            </h6>
                            <ul className="list-unstyled">
                              <li className="nav-item">
                                <a
                                  href="kk"
                                  className="nav-link text-small pb-0 "
                                >
                                  Commercial & Other Vehicles
                                </a>
                              </li>
                              <li className="nav-item">
                                <a
                                  href="kk"
                                  className="nav-link text-small pb-0 "
                                >
                                  Spare Parts
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="col-lg-6 mb-4">
                            <h6 className="h6heading ">Pets</h6>
                            <ul className="list-unstyled">
                              {pets.map((links) => (
                                <li className="nav-item" key={links}>
                                  <a
                                    href="kk"
                                    className="nav-link text-small pb-0 "
                                  >
                                    {links}
                                  </a>
                                </li>
                              ))}{" "}
                            </ul>
                          </div>
                          <div className="col-lg-6 mb-4">
                            <h6 className="h6heading">
                              Furniture
                            </h6>
                            <ul className="list-unstyled">
                              {furniture.map((links) => (
                                <li className="nav-item" key={links}>
                                  <a
                                    href="kk"
                                    className="nav-link text-small pb-0 "
                                  >
                                    {links}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className="col-lg-6 mb-4">
                            <h6 className="h6heading">
                              Services
                            </h6>
                            <ul className="list-unstyled">
                              {services.map((links) => (
                                <li className="nav-item" key={links}>
                                  <a
                                    href="kk"
                                    className="nav-link text-small pb-0 "
                                  >
                                    {links}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="nav-item">
              <a href="kk" className="nav-link onlelinehead">
                Cars
              </a>
            </li>
            <li className="nav-item">
              <a href="kk" className="nav-link onlelinehead">
                Motorcycle
              </a>
            </li>
            <li className="nav-item">
              <a href="kk" className="nav-link onlelinehead">
                Mobile Phones
              </a>
            </li>
            <li className="nav-item">
              <a href="kk" className="nav-link onlelinehead">
                For Sale: Houses & Apartments
              </a>
            </li>
            <li className="nav-item">
              <a href="kk" className="nav-link onlelinehead">
                Scooters
              </a>
            </li>
            <li className="nav-item">
              <a href="kk" className="nav-link onlelinehead">
                Commercial & Other Vehicles
              </a>
            </li>
            <li className="nav-item">
              <a href="kk" className="nav-link onlelinehead">
                For Rent: Houses & Apartments
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <Box>
        <Image  height={'130px'} src="https://statics.olx.in/olxin/banners/hero_bg_in_v2@1x.png" />
      </Box>
    </div>
  );
};
