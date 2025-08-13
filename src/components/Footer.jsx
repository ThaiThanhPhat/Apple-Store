import React from 'react'
import { footerLinks } from '../constants'

const Footer = () => {
  return (
    <footer style={{ paddingTop: '1.25rem', paddingBottom: '1.25rem', paddingLeft: '1.25rem', paddingRight: '1.25rem' }}>
      <div className="screen-max-width">
        <div>
          <p className="font-semibold text-gray-400 text-xs">
            More ways to shop: {' '}
            <span className="underline text-blue-500">
            Find an Apple Store {' '}
            </span>
            or {' '}
            <span className="underline text-blue-500">
            other retailer
            </span>{' '}
            near you.
          </p>
          <p className="font-semibold text-gray-400 text-xs">
            Or call 000800-040-1966
          </p>
        </div>

        <div style={{ marginTop: '1.25rem', marginBottom: '1.25rem', height: '1px', width: '100%' }} className="bg-neutral-700" />

        <div className="flex md:flex-row flex-col md:items-center justify-between">
          <p className="font-semibold text-gray-400 text-xs">Copright @ 2024 Apple Inc. All rights reserved.</p>
          <div className="flex">
            {footerLinks.map((link, i) => (
              <p key={link} className="font-semibold text-gray-400 text-xs">
                {link}{' '}
                {i !== footerLinks.length - 1 && (
                  <span style={{ marginLeft: '0.5rem', marginRight: '0.5rem' }}> | </span>
                )}
              </p>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer