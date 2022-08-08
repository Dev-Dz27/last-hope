import React from 'react';
import { FaTiktok } from 'react-icons/fa';
import { BsFacebook, BsWhatsapp } from 'react-icons/bs';
import Link from 'next/link'

const year = new Date().getFullYear();

const Footer = () => (
  <footer className="pt-5">
    <div className="custom-container mb-5 pb-5 pt-5">
      <div className="row">
        <div className="col-12 col-sm-6 col-md-4">
          <p className="font-family-secondary font-size-display1 mb-4">
            Dzign Store
          </p>
          <div className="d-flex font-color-medium mb-5 pb-3 pb-md-0 mb-md-0">
            <div className="pr-5">
              <Link
                href="/"
                className="mb-3 d-block font-color-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                Shop
              </Link>
            </div>
            <div>
              <Link
                href="/about"
                className="mb-3 d-block font-color-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                About
              </Link>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-md-4">
          <p className="font-family-secondary font-size-display1 mb-4">
            Follow us
          </p>
          <div className="d-flex font-color-medium mb-5 pb-3 pb-md-0 mb-md-0">
            <div className="pr-5">
              <a
                href="https://twitter.com/"
                className="mb-3 d-block font-color-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
              <a
                href="https://www.instagram.com/dzign_store/"
                className="d-block font-color-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram 
                </a>
            </div>
            <div>
              <a
                href="https://Tiktok.com/"
                className="mb-3 d-block font-color-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                TikTok
              </a>
              <a
                href="https://www.linkedin.com/"
                className="d-block font-color-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-4">
        <form
          action="https://www.getrevue.co/profile/Devdz/add_subscriber"
          method="post"
          id="revue-form"
          name="revue-form"
          target="_blank"
        >
          <p className="font-family-secondary font-size-display1 mb-3">
            Newsletter
          </p>
          <div className="position-relative">
            <input
             type="email"
             name="member[email]"
             id="member_email"
              className="borderbottom border-color-gray400 h-48 w-100 px-3"
              placeholder="email address"
            />
            <button 
            type="submit"
            value="Join Today"
            name="member[subscribe]"
            id="member_submit"
            className="bg-transparent position-absolute right-0 top-50 translateY--50 pr-2 h-48"
            >
              <img src="/icon/arrow-long-right.svg" className="w-24" alt="Arrow icon"/>
            </button>
          </div>
        </form>
        </div>
      </div>
    </div>
   
      <div className="bg-brand300">
        <div className="custom-container d-flex flex-column flex-md-row align-items-center  justify-content-between">
          <div className="font-color-brand font-size-caption py-4 text-right">
          <Link
              href="https://www.google.com/"
              className="font-color-brand font-size-caption text-uppercase text-center"
              rel="noopener noreferrer"
            >
              &copy; Dev/Dz
            </Link>
          </div>
        </div>
      
    </div>
  </footer>
);

export default Footer;
