import React from 'react';

export default function TeamPage() {
  return (
    <div>
      <section className="container mx-auto px-6 p-10" id="about">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">About Swaap</h2>
        <h3 className="text-3xl mb-8 text-black-200">
          We help conference organizers and attendees track, analyze and improve their conference
          experience
        </h3>
        <h2 className="text-4xl font-bold text-left text-gray-800 mb-8">Our Story</h2>
        <div className="flex items-center flex-wrap mb-20">
          <div className="w-full md:w-1/2">
            <p className="text-gray-600 mb-8">
              Swaap launched in January 2020, and today thousands of people use Swaap to manage
              thousands of conferences, meet-ups, hackathon, and more.
            </p>
            <h2 className="text-4xl font-bold text-left text-gray-800 mb-8">Our Passion</h2>
            <p class="text-gray-600 mb-8">
              We're passionate about making it easy to manage your conference experience and
              improving yur networking so you can spend more time focusing on events.
            </p>
            <h4 className="text-3xl text-gray-800 font-bold mb-3">Christmas or Birthday Lists</h4>
            <p className="text-gray-600 mb-8">
              Manage everyone's wants, and keep tabs on how much each person's gifts cost.
            </p>
          </div>
        </div>
      </section>

      <section className="container mx-auto bg-white p-5 ">
        <section className="container mx-auto bg-white p-5">
          <div classname="container">
            <div classname="row">
              <div className="col-12">
                <div classname="section-heading text-center">
                  <h2 className="text-4xl flex justify-center font-sembold text-purple-600 ">
                    Our Philosophy
                  </h2>
                </div>
                <div>{/* <h2 className="border-b-2 border-pink-500 w-2/12"></h2> */}</div>
              </div>
            </div>
          </div>

          <div className="flex justify-between text-center p-5" id="demo">
            <div className="col-12 col-sm-6 col-lg-4">
              <h4 className="p-2 font-sembold text-purple-500">
                <img
                  src="https://d33wubrfki0l68.cloudfront.net/8ae959457496f14932ca6872d8270a03c2956237/df151/assets/images/about/simple.svg"
                  width="80px"
                  class="col-12 col-sm-6 col-lg-4"
                  alt="Simple"
                />
                Simple
              </h4>
              <p className="mb-8 p-2 ">
                Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>
            </div>
            <div className="col-12 col-sm-6 col-lg-4">
              <h4 className="p-2 font-sembold text-purple-500">
                <img
                  src="https://d33wubrfki0l68.cloudfront.net/00a2b651d6529b8199b3ed3ab2e54f082e03d06e/c4384/assets/images/about/collab.svg"
                  width="80px"
                  class="center-block img-responsive b-margin-sm"
                  alt="Collab"
                />
                Collaborative
              </h4>
              <p className="mb-8 p-2">
                Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>
            </div>
            <div className="col-12 col-sm-6 col-lg-4">
              <h4 className="p-2 font-sembold text-purple-500">
                <img
                  src="https://d33wubrfki0l68.cloudfront.net/795341c07b32512c1608995a27c85ac0d5bfc2d2/bb140/assets/images/about/comprehensive.svg"
                  width="80px"
                  class="center-block img-responsive b-margin-sm"
                  alt="Comprehensive"
                />
                Comprehensive
              </h4>
              <p className="text-start mb-8 p-2">
                Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>
            </div>
            <div className="col-12 col-sm-6 col-lg-4">
              <h4 className="p-2 font-sembold text-purple-500">
                <img
                  src="https://d33wubrfki0l68.cloudfront.net/e831f78362ec6c6ebc5d4ac602e57d3cfb156bd3/082af/assets/images/about/informative.svg"
                  width="80px"
                  class="center-block img-responsive b-margin-sm"
                  alt="Informative"
                />
                Informative
              </h4>
              <p className="mb-8 p-2 ">
                Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}
