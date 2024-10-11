import {
  Body,
  Container,
  Column,
  Head,
  Heading,
  Html,
  Img,
  Row,
  Section,
  Text,
  Tailwind,
  Font,
  Link,
} from "@react-email/components";
import * as React from "react";

interface ActivateAccountProps {
  title: string;
  description: string;
  buttonText: string;
  buttonUrl: string;
  logoImage: string;
  stepItems: { icon: string; title: string; description: string }[];
  socialItems: { icon: string; url: string }[];
  footerText: string;
  footerAddress: string;
}

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "";

export const ActivateAccount = ({
  title,
  description,
  logoImage,
  stepItems,
  socialItems,
  footerText,
  footerAddress,
}: ActivateAccountProps) => {
  return (
    <Tailwind>
      <Html>
        <Head>
          <Font
            fontFamily="Poppins"
            fallbackFontFamily="sans-serif"
            webFont={{
              url: "https://fonts.gstatic.com/s/poppins/v21/pxiEyp8kv8JHgFVrJJfecg.woff2",
              format: "woff2",
            }}
            fontWeight={400}
            fontStyle="normal"
          />
        </Head>
        <Body className="bg-zinc-200 my-auto mx-auto font-sans p-8 md:p-12">
          <Container className="bg-white border border-solid border-[#eaeaea] rounded-xl mx-auto my-24 max-w-lg">
            {/* logoImage */}
            <Row className="flex items-center p-6 border-b border-solid border-[#eaeaea]">
              <Column>
                <Img src={logoImage} width="96" alt="Logo Placeholder" />
              </Column>
            </Row>

            {/* Content - title, description */}
            <Heading className="text-black text-xl font-bold text-left m-0 mt-8 px-6">
              {title}
            </Heading>

            {/* Description - description should be a template literal */}
            {description.split("\n").map((item, index) => (
              <Text
                key={index}
                className="m-0 p-0 px-6 mt-4 text-left text-base text-zinc-500"
              >
                {item}
              </Text>
            ))}

            {/* Steps - icon, title, and description of stepItems[] */}
            {stepItems.map((feature, index) => (
              <Section key={index} className="my-8 px-6">
                <Row>
                  <Column className="w-10">
                    <Img
                      src={feature.icon}
                      width="100%"
                      height="auto"
                      className="aspect-square"
                      alt="Feature Icon"
                    />
                  </Column>
                  <Column align="left">
                    <Text className="text-black text-base font-bold text-left m-0 p-0 ml-4">
                      {feature.title}
                    </Text>
                  </Column>
                </Row>
                <Row>
                  <Text className="m-0 p-0 text-zinc-500 text-sm text-left mt-4">
                    {feature.description}
                  </Text>
                </Row>
              </Section>
            ))}

            {/* Footer Top Section */}
            <Container className="m-0 p-0 mt-8 pt-6 px-6 border-t border-solid border-[#eaeaea]">
              <Row className="w-fit m-0">
                {socialItems.map((item, index) => (
                  <Column key={index} align="left" className="w-fit">
                    <Link href={item.url} className="w-fit">
                      <Img
                        className="mx-1 opacity-40"
                        src={item.icon}
                        width="24"
                        height="24"
                      />
                    </Link>
                  </Column>
                ))}
              </Row>
            </Container>

            {/* Footer Mid Section */}
            <Container className="m-0 p-0 px-6 my-4">
              <Text className="text-xs my-0 mb-1 text-zinc-500">
                {footerText}
              </Text>
              <Text className="text-xs my-0 text-zinc-500">
                {footerAddress}
              </Text>
            </Container>

            {/* Footer Bottom Section */}
            <Container>
              <Row className="m-0 p-0 px-6 pb-6 w-fit">
                <Column align="right">
                  <Text className="text-xs m-0 mr-2 md:mr-4 p-0 underline text-zinc-500 w-fit">
                    Unsubscribe
                  </Text>
                </Column>
                <Column align="center">
                  <Text className="text-xs m-0 mr-2 md:mr-4 p-0 underline text-zinc-500 w-fit">
                    Privacy Policy
                  </Text>
                </Column>
                <Column align="left">
                  <Text className="text-xs m-0 mr-2 md:mr-4 p-0 underline text-zinc-500 w-fit">
                    Support
                  </Text>
                </Column>
              </Row>
            </Container>
          </Container>
        </Body>
      </Html>
    </Tailwind>
  );
};

ActivateAccount.PreviewProps = {
  title: "Activate your account",
  description: `Hi User 🎯,
    
    You're one step closer. Go to your account settings and follow the instructions to activate your account.`,
  buttonText: "Join the team",
  buttonUrl: "https://example.com",
  logoImage: `${baseUrl}/static/logo.png`,
  stepItems: [
    {
      icon: `${baseUrl}/static/assets/icon-fingerprint.png`,
      title: "Secure your account",
      description:
        "Stay protected 24/7 anywhere anytime. Be it in the office, at home, or on the go.",
    },
    {
      icon: `${baseUrl}/static/assets/icon-globe.png`,
      title: "Connect with the world",
      description:
        "Explore the world with us. Let's embrace new cultures, new ideas, and new possibilities.",
    },
    {
      icon: `${baseUrl}/static/assets/icon-rocket.png`,
      title: "Boost your productivity",
      description:
        "Now with our tools, you can increase your productivity and get more done in less time.",
    },
  ],
  socialItems: [
    {
      icon: `${baseUrl}/static/icon/twitter.png`,
      url: "https://example.com",
    },
    {
      icon: `${baseUrl}/static/icon/github.png`,
      url: "https://example.com",
    },
    {
      icon: `${baseUrl}/static/icon/instagram.png`,
      url: "https://example.com",
    },
  ],
  footerText: "© 2024 Mailed Inc. All rights reserved.",
  footerAddress: "1234 Mailed St, Mailed City, CA 94102",
} as ActivateAccountProps;

export default ActivateAccount;
