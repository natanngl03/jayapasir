import { useState } from 'react';
import { FaFacebookSquare, FaInstagramSquare, FaYoutube } from 'react-icons/fa';
import { RxExternalLink } from 'react-icons/rx';

export default function Location() {
   return (
      <div className='container-fluid pb-10 pt-6'>
         <h2 className='mb-5 text-center fs-3 fw-bold mb-7'>
            Temukan <span className='text-primary'>Kami</span>
         </h2>

         <div className='container'>
            <div className='row g-3'>
               <div className='col-12 col-md-2 '>
                  <div className='row g-3'>
                     <div className='col-4 col-md-12 text-blue'>
                        <a href='https://web.facebook.com/61592404657760' target='_blank' rel='noopener noreferrer'>
                           <span className='border d-flex flex-column align-items-center gap-2 py-2 rounded'>
                              <FaFacebookSquare style={{ color: 'var(--bs-blue)' }} className='fs-1' />
                              <span className='d-flex align-items-center gap-2 text-dark '>
                                 <p className=''>Jaya Pasir</p>
                                 <RxExternalLink className='' />
                              </span>
                           </span>
                        </a>
                     </div>
                     <div className='col-4 col-md-12'>
                        <a href='https://www.instagram.com/pasir_jaya' target='_blank' rel='noopener noreferrer'>
                           <span className='border d-flex flex-column align-items-center gap-2 py-2 rounded'>
                              <FaInstagramSquare style={{ color: 'var(--bs-pink)' }} className='fs-1' />
                              <span className='d-flex align-items-center gap-2 text-dark '>
                                 <p className=''>pasir_jaya</p>
                                 <RxExternalLink className='' />
                              </span>
                           </span>
                        </a>
                     </div>
                     <div className='col-4 col-md-12'>
                        <a href='https://www.youtube.com/@jayapasir0393' target='_blank' rel='noopener noreferrer'>
                           <span className='border d-flex flex-column align-items-center gap-2 py-2 rounded'>
                              <FaYoutube style={{ color: 'var(--bs-red)' }} className='fs-1' />
                              <span className='d-flex align-items-center gap-2 text-dark '>
                                 <p className=''>Jaya Pasir</p>
                                 <RxExternalLink className='' />
                              </span>
                           </span>
                        </a>
                     </div>
                  </div>
               </div>
               <div className='col-12 col-md-10 '>
                  <iframe
                     src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23384.518845367853!2d106.65775436439299!3d-6.267460589332813!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69fb6797c17187%3A0x5bc7230166aa0e07!2sJaya%20Pasir!5e0!3m2!1sid!2sid!4v1789727761820!5m2!1sid!2sid'
                     style={{
                        width: '100%',
                        height: '450px',
                     }}
                     loading='lazy'
                     referrerPolicy='strict-origin-when-cross-origin'
                  ></iframe>
               </div>
            </div>
         </div>
      </div>
   );
}
