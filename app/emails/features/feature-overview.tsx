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

interface FeatureOverviewProps {
  title: string;
  description: string;
  buttonText: string;
  buttonUrl: string;
  logoImage: string;
  featureItems: { icon: string; title: string; description: string }[];
  socialItems: { icon: string; url: string }[];
  footerText: string;
  footerAddress: string;
}

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "";

export const FeatureOverview = ({
  title,
  description,
  logoImage,
  featureItems,
  socialItems,
  footerText,
  footerAddress,
}: FeatureOverviewProps) => {
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

            {/* Content - title, description, and featureItems[] */}
            <Heading className="text-black text-xl font-bold text-left m-0 mt-8 px-6">
              {title}
            </Heading>

            {/* Description - description should be a template literal */}
            {description.split("\n").map((item, index) => (
              <Text
                key={index}
                className={`m-0 p-0 px-6 mt-4 text-left text-base text-zinc-500 ${
                  index === description.split("\n").length - 1 ? "mb-8" : "mb-4"
                }`}
              >
                {item}
              </Text>
            ))}

            {/* Features - icon, title, and description of featureItems[] */}
            {featureItems.map(
              (item, index) =>
                index % 2 === 0 && (
                  <Row key={index} className="m-0 p-0 px-6 mb-6">
                    <Column className="w-1/2 pr-2">
                      <Img
                        src={featureItems[index].icon}
                        width="32"
                        height="32"
                        className="mb-2"
                      />
                      <Heading className="text-black text-sm font-bold m-0">
                        {featureItems[index].title}
                      </Heading>
                      <Text className="text-zinc-500 text-xs m-0 mt-1">
                        {featureItems[index].description}
                      </Text>
                    </Column>
                    {index + 1 < featureItems.length && (
                      <Column className="w-1/2 pl-2">
                        <Img
                          src={featureItems[index + 1].icon}
                          width="32"
                          height="32"
                          className="mb-2"
                        />
                        <Heading className="text-black text-sm font-bold m-0">
                          {featureItems[index + 1].title}
                        </Heading>
                        <Text className="text-zinc-500 text-xs m-0 mt-1">
                          {featureItems[index + 1].description}
                        </Text>
                      </Column>
                    )}
                  </Row>
                )
            )}

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

FeatureOverview.PreviewProps = {
  title: "Introducing our new feature",
  description: `Hi User 🎯,
      
      We are excited to announce our new feature that will help you to be more productive and secure. Here are some of the benefits of using our product:`,
  buttonText: "Join the team",
  buttonUrl: "https://example.com",
  logoImage: `${baseUrl}/static/logo.png`,
  featureItems: [
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
        "Explore the world with us. Let's embrace new cultures, ideas, and new possibilities.",
    },
    {
      icon: `${baseUrl}/static/assets/icon-rocket.png`,
      title: "Boost your productivity",
      description:
        "Now with our tools, you can increase productivity and get more done in less time.",
    },
    {
      icon: `${baseUrl}/static/assets/icon-integrate.png`,
      title: "Stay connected",
      description:
        "Chat and call with your team members, share files, and get updates on the go.",
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
} as FeatureOverviewProps;

export default FeatureOverview;
