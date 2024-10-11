import {
  Body,
  Button,
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

interface NewPlanProps {
  title: string;
  description: string;
  buttonText: string;
  buttonUrl: string;
  logoImage: string;
  socialItems: { icon: string; url: string }[];
  footerText: string;
  footerAddress: string;
}

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "";

export const NewPlan = ({
  title,
  description,
  buttonText,
  buttonUrl,
  logoImage,
  socialItems,
  footerText,
  footerAddress,
}: NewPlanProps) => {
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

            {/* Content - title, description, and tableItems[] */}
            <Heading className="text-black text-xl font-bold text-left m-0 p-0 mt-8 px-6">
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

            {/* Table - title, description, and tableItems[] */}
            <Section className="px-6 my-6">
              <Row align="center">
                <Column align="left" className="w-1/2">
                  <Text className="text-left text-lg text-black">
                    <strong>Individual</strong>
                  </Text>
                </Column>
                <Column align="left" className="w-1/2">
                  <Text className="text-left text-lg text-black">
                    <strong>Team</strong>
                  </Text>
                </Column>
              </Row>
              <Row align="center">
                <Column align="left" className="w-1/2">
                  <Text className="text-left text-sm text-zinc-500">
                    <strong className="text-black">12$</strong> monthly
                  </Text>
                </Column>
                <Column align="left" className="w-1/2">
                  <Text className="text-left text-sm text-zinc-500">
                    <strong className="text-black">99$</strong> monthly
                  </Text>
                </Column>
              </Row>
              <Row align="center">
                <Column align="left" className="w-1/2">
                  <Text className="text-left text-sm text-zinc-500">
                    <strong className="text-black">1</strong> user
                  </Text>
                </Column>
                <Column align="left" className="w-1/2">
                  <Text className="text-left text-sm text-zinc-500">
                    <strong className="text-black">Up to 10</strong> users
                  </Text>
                </Column>
              </Row>
              <Row align="center">
                <Column align="left" className="w-1/2">
                  <Text className="text-left text-sm text-zinc-500">
                    <strong className="text-black">Predesigned</strong> domain
                  </Text>
                </Column>
                <Column align="left" className="w-1/2">
                  <Text className="text-left text-sm text-zinc-500">
                    <strong className="text-black">Custom</strong> domain
                  </Text>
                </Column>
              </Row>
              <Row align="center">
                <Column align="left" className="w-1/2">
                  <Text className="text-left text-sm text-zinc-500">
                    <strong className="text-black">—</strong>
                  </Text>
                </Column>
                <Column align="left" className="w-1/2">
                  <Text className="text-left text-sm text-zinc-500">
                    <strong className="text-black">SSL</strong> certificate
                  </Text>
                </Column>
              </Row>
            </Section>

            {/* Button - buttonText and buttonUrl */}
            <Container className="px-6">
              <Button
                className="bg-[#000000] rounded text-white text-base w-full font-medium no-underline text-center py-3"
                href={buttonUrl}
              >
                {buttonText}
              </Button>
            </Container>

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

NewPlan.PreviewProps = {
  title: "You have a new plan waiting for you",
  description: `Hi User 📅, 
    
    Hosting your website has never been easier, from assigning custom domains to managing your team, we have got you covered.
    
    Check out all the features and benefits of the new plan below:`,
  buttonText: "Try free for 14 days",
  buttonUrl: "https://example.com",
  logoImage: `${baseUrl}/static/logo.png`,
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
} as NewPlanProps;

export default NewPlan;
