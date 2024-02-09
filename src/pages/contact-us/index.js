import React from 'react'

const Index = () => {
  return (
    <>
      <section className='FNV-ContactUs'>
        <div className='container'>
          <div className='row'>
            <h1>Contact with Fanavaran</h1>
            <div className='col-12 col-md-6'>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            <div className='col-12 col-md-6'>
              <form>
                <div className='row'>
                  <div className='col-12 col-md-6 mb-3'>
                    <input type='text' className='form-control' placeholder='Full Name' />
                  </div>

                  <div className='col-12 col-md-6 mb-3'>
                    <input type='email' className='form-control' placeholder='Email' />
                  </div>

                  <div className='col-12 mb-3'>
                    <textarea className='form-control' rows={4} placeholder='Type your message' ></textarea>
                  </div>

                  <div className='col-12 mb-3'>
                    <button type='submit' className='FNV-Btn SecondaryColor BtnLarge w-100'>Send</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2907.6290760198417!2d-79.95137982348712!3d43.21726868051585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882c85252c90b295%3A0x881e55084178b394!2zRmFuYXZhcmFuIHwg2KfZhtis2YXZhiDZgdmG24wg2YXZh9mG2K_Ys9uMINmB2YbYp9mI2LHYp9mG!5e0!3m2!1sen!2slu!4v1707492191488!5m2!1sen!2slu" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </section>
    </>
  )
}
Index.guestGuard = true

export default Index
