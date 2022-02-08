import Link from 'next/link'
import Image from 'next/image'
import { Terms, BrandFooter, InnerFooter, MailUs, Phone, FooterNav, NavList, UList, SocialItem, Copy, InnerTerms } from '../styles/footerStyles'
import { Span } from '../styles/commonStyles'
import twitter from '../public/svg/social-twitter.svg'
import facebook from '../public/svg/social-facebook.svg'
import instagram from '../public/svg/social-instagram.svg'
import linkedin from '../public/svg/social-linkedin.svg'

const FOOTERURLS = [
  { id: 1, href: "/careers", element: "Career" },
  { id: 2, href: "/contact", element: "Contact" },
  { id: 3, href: "/grow", element: "GROW" },
]

const SOCIALLINKS = [
  { id: 1, name: "twitter", src: twitter, href: "htps://twitter.com/goodbrands" },
  { id: 2, name: "facebook", src: facebook, href: "htps://facebook.com/goodbrands" },
  { id: 3, name: "instagram", src: instagram, href: "htps://instagram.com/goodbrands" },
  { id: 4, name: "linkedin", src: linkedin, href: "htps://linkedin.com/goodbrands" },
]

export default function Footer() {
  return (
    <BrandFooter>
      <InnerFooter>
        <BrandMail />
        <BrandPhone />
        <BrandFooterNav />
        <Social />
        <CopyRight />
        <Privacy />
      </InnerFooter>
    </BrandFooter>
  )
}

const BrandMail = () => {
  return (
    <MailUs>
      <a className="brand-mail" href="mailto:hello@goodbrands.com">
        <Span>
          hello
        </Span>
        @goodbrands
        <Span serif>.</Span>
        com
      </a>
    </MailUs>
  )
}

const BrandPhone = () => {
  return (
    <Phone>
      <a className="brand-phone" href="tel:+254715721717">
        +254-715-721717
      </a>
    </Phone>
  )
}

const BrandFooterNav = () => {
  return (
    <FooterNav>
      <NavList>
        {FOOTERURLS.map(furl => (
          <li className="list-item" key={furl.id}>
            <Link href={furl.href}>
              <a className="nav-item">
                {furl.element}
              </a>
            </Link>
          </li>
        )
        )}
      </NavList>
    </FooterNav>
  )
}

const Social = () => {
  return (
    <UList>
      {SOCIALLINKS.map(({ id, name, src, href }) =>
        <SocialItem key={id}>
          <a className="social-link" href={href}>
            <Image src={src} alt={name} />
          </a>
        </SocialItem>
      )}
    </UList>
  )
}

const CopyRight = () => {
  return (
    <Copy>
      <p><Span>©</Span> Copyright 2002 - {new Date().getFullYear()} goodbrands. All rights reserved.
        goodbrands Ltd. 55th St, Moi Avenue, Bidii Mall, Suit 45 - 48.
      </p>
    </Copy>
  )
}

const Privacy = () => {
  return (
    <Terms>
      <InnerTerms>
        <li className="list-item" >
          <Link href='/privacy'>
            <a className="nav-item">
              Privacy & Terms<Span>.</Span>
            </a>
          </Link>
        </li>
      </InnerTerms>
    </Terms>
  )
}
