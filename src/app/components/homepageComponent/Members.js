import React from 'react'
import Image from 'next/image'

const Members = () => {
  return (
    <>
      <div className="teamWrapper mt-10 mb-[5rem]">
        <div className="container mx-auto">
          <h1 className="text-center text-4xl font-bold">Our Team</h1>
          <p className="text-center">Meet Our Hardworking Team</p>
          <div className="grid sm:grid-cols-3 grid-cols-1 gap-6 mt-16">
            
          <div className="column">
              <div className="teamcol">
                <div className="teamcolinner">
                  <div className="avatar flex justify-center"><Image src="/event.jpg" width={200} height={50} alt="Member" /></div>
                  <div className="member-name text-center mt-10 text-[1.75rem]"> <h2>Prathmesh Zingade</h2> </div>
                  <div className="member-info text-center"><p>We all know that creative juices cannot flow endlessly</p></div>
                  <div className="member-mail text-center"> <p><a href="mailto:@gmail.com">Main@gmil.com</a></p> </div>
                  <div className="member-social flex justify-center items-center">
                    <ul className="social-listing">
                      <li><a href="#" className="fa fa-facebook"></a></li>
                      <li><a href="#" className="fa fa-instagram"></a></li>
                      <li><a href="#" className="fa fa-twitter"></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="column">
              <div className="teamcol">
                <div className="teamcolinner">
                  <div className="avatar flex justify-center"><Image src="/event.jpg" width={200} height={50} alt="Member" /></div>
                  <div className="member-name text-center mt-10 text-[1.75rem]"> <h2>Aditya Waigankar</h2> </div>
                  <div className="member-info text-center"><p>We all know that creative juices cannot flow endlessly</p></div>
                  <div className="member-mail text-center"> <p><a href="mailto:@gmail.com">Main@gmil.com</a></p> </div>
                  <div className="member-social flex justify-center items-center">
                    <ul className="social-listing">
                      <li><a href="#" className="fa fa-facebook"></a></li>
                      <li><a href="#" className="fa fa-instagram"></a></li>
                      <li><a href="#" className="fa fa-twitter"></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="column">
              <div className="teamcol">
                <div className="teamcolinner">
                  <div className="avatar flex justify-center"><Image src="/event.jpg" width={200} height={50} alt="Member" /></div>
                  <div className="member-name text-center mt-10 text-[1.75rem]"> <h2>Raj Padval</h2> </div>
                  <div className="member-info text-center"><p>We all know that creative juices cannot flow endlessly</p></div>
                  <div className="member-mail text-center"> <p><a href="mailto:@gmail.com">Main@gmil.com</a></p> </div>
                  <div className="member-social flex justify-center items-center">
                    <ul className="social-listing">
                      <li><a href="#" className="fa fa-facebook"></a></li>
                      <li><a href="#" className="fa fa-instagram"></a></li>
                      <li><a href="#" className="fa fa-twitter"></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Members