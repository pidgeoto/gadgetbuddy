import React from "react";

export default function Privacy() {
  return (
    <div className="mt-4 ">
      <div className=" bg-white text-black ">
        <div className="  ">
          <div className="bg-gradient-to-br from-transparent  to-gray-100  shadow-t-2xl rounded-2xl border-none py-1 mb-2">
            <h1 className="font-bold text-4xl mb-4 ">Privacy Policy</h1>
            <h6 className="text-base ">
              For users that register on our website (if any), we also store the
              personal information they provide in their user profile. All users
              can see, edit, or delete their personal information at any time
              (except they cannot change their username). Website administrators
              can also see and edit that information.
            </h6>
          </div>
          <div className="bg-gradient-to-br from-transparent  to-gray-100  shadow-t-2xl rounded-2xl border-none py-1 mb-4">
            <h2 className="text-3xl font-bold mb-4">Cookies</h2>
            <h3 className="text-xl font-semibold mb-2">Suggested text:</h3>
            <h6 className="text-base mb-4">
              If you leave a comment on our site you may opt-in to saving your
              name, email address and website in cookies. These are for your
              convenience so that you do not have to fill in your details again
              when you leave another comment. These cookies will last for one
              year.
            </h6>
            <h6 className="text-base mb-4">
              If you visit our login page, we will set a temporary cookie to
              determine if youowser accepts cookies. This cookie contains no
              personal data and is discarded when you close your browser.
            </h6>
            <h6 className="text-base mb-4">
              When you log in, we will also set up several cookies to save your
              login information and your screen display choices. Login cookies
              last for two days, and screen options cookies last for a year. If
              you select “Remember Me”, your login will persist for two weeks.
              If you log out of your account, the login cookies will be removed.
            </h6>
            <h6 className="text-base mb-4">
              If you edit or publish an article, an additional cookie will be
              saved in your browser. This cookie includes no personal data and
              simply indicates the post ID of the article you just edited. It
              expires after 1 day.
            </h6>
          </div>
          <div className="bg-gradient-to-br from-transparent  to-gray-100  shadow-t-2xl rounded-2xl border-none py-1 pb-3 mb-4">
            <h1 className="text-3xl font-bold mb-4">
              What rights you have over your data
            </h1>
            <h3 className="text-xl font-semibold mb-2">Suggested text:</h3>
            <h6 className="text-base mb-4">
              If you have an account on this site, or have left comments, you
              can request to receive an exported file of the personal data we
              hold about you, including any data you have provided to us. You
              can also request that we erase any personal data we hold about
              you. This does not include any data we are obliged to keep for
              administrative, legal, or security purposes.
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
}
