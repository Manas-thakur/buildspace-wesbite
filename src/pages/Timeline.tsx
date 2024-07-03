function Timeline() {
  return (
    <div className="flex flex-col items-center justify-center my-20">
      <section className="w-[800px]">
        <div className="top-0 py-3 z-10 shadow-bottom-right shadow-white sticky">
          <h2 className="group-date">June</h2>
        </div>
        <div className="timeline">
          <div className="relative">
            <div className="dot"></div>
            <div className="pl-10">
              <h3 className="timeline-title pr-[17rem] mr-80 pb-1">Week 1</h3>
              <span className="timeline-date pr-[17rem] mr-80 text-base font-light">
                17th June
              </span>
              <p className="text-gray-500 pt-4 mt-3">
                We brainstormed, tossed around ideas, and refined our vision
                until we landed on something exciting: An AI-powered system was
                developed to detect and document road irregularities like
                potholes and debris using dash cam technology. Our goal is to
                deliver real-time data on road conditions, enhance maintenance
                efficiency, and boost road safety.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="dot" title="current event">
              <div className="dot absolute -top-1 -left-1 animate-ping"></div>
            </div>
            <div className="pl-10">
              <h3 className="timeline-title pr-[17rem] mr-80 pb-1"> Week 2</h3>
              <span className="timeline-date pr-[17rem] mr-80 text-base font-light">
                25th June{" "}
              </span>
              <p className="text-gray-500 pt-4 mt-3">
                In Week 2, we got our hands dirty by building a basic prototype
                of our system. This initial version combined AI with dashcam
                footage to start identifying road issues. It's a simple model,
                but it's our first step towards a functional product.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="sticky w-[800px]">
        <div className="sticky top-0 py-3 z-10 shadow-bottom-right shadow-white">
          <h2 className="group-date">July</h2>
        </div>
        <div className="timeline">
          <div className="relative">
            <div className="dot">
              {/* <div className="dot absolute -top-1 -left-1 animate-ping"></div> */}
            </div>
            <div className="pl-10">
              <h3 className="timeline-title pr-[17rem] mr-80 pb-1"> Week 3</h3>
              <span className="timeline-date pr-[17rem] mr-80 text-base font-light">
                3rd July
              </span>
              <p className="text-gray-500 pt-4 mt-3">Coming soon!</p>
            </div>
          </div>
          <div className="relative">
            <div className="dot"></div>
            <div className="pl-10">
              <h3 className="timeline-title pr-[17rem] mr-80 pb-1"> Week 4</h3>
              <span className="timeline-date pr-[17rem] mr-80 text-base font-light">
                10th July
              </span>
              <p className="text-gray-500 pt-4 mt-3">Coming soon!</p>
            </div>
          </div>
          <div className="relative">
            <div className="dot"></div>
            <div className="pl-10">
              <h3 className="timeline-title pr-[17rem] mr-80 pb-1"> Week 5</h3>
              <span className="timeline-date pr-[17rem] mr-80 text-base font-light">
                17th July
              </span>
              <p className="text-gray-500 pt-4 mt-3">Coming soon!</p>
            </div>
          </div>
          <div className="relative">
            <div className="dot"></div>
            <div className="pl-10">
              <h3 className="timeline-title pr-[17rem] mr-80 pb-1"> Week 6</h3>
              <span className="timeline-date pr-[17rem] mr-80 text-base font-light">
                24th July
              </span>
              <p className="text-gray-500 pt-4 mt-3">Coming soon!</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Timeline;
