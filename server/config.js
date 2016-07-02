export const sessionConfig = {
  secret: 'an ordinary genius',
  resave: false,
  saveUninitialized: false,
  cookie: {
    // Specifies the number (in milliseconds)
    maxAge: 1000*60*60*24,
    // The cookie.secure option can also be set to the special value 'auto' to have this setting automatically match the determined security of the connection. Be careful when using this setting if the site is available both as HTTP and HTTPS, as once the cookie is set on HTTPS, it will no longer be visible over HTTP. This is useful when the Express "trust proxy" setting is properly setup to simplify development vs production configuration.
    secure: 'auto'
  }
}

export const gcloudConfig = {
  projectId: 'sharekey-1244'
}
