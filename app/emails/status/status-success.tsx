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

interface StatusSuccessProps {
  title: string;
  description: string;
  logoImage: string;
  statusImage: string;
  socialItems: { icon: string; url: string }[];
  footerText: string;
  footerAddress: string;
}

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "";

export const StatusSuccess = ({
  title,
  description,
  logoImage,
  statusImage,
  socialItems,
  footerText,
  footerAddress,
}: StatusSuccessProps) => {
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

            {/* Status Image - customize statusImage */}
            <Container>
              <Img
                src={statusImage}
                width="72"
                alt="Status Image"
                className="mx-auto mt-8 mb-4"
              />
            </Container>

            {/* Content - title, description, buttonText, and buttonUrl */}
            <Heading className="text-black text-xl font-bold text-center m-0 mb-4 px-6">
              {title}
            </Heading>

            {/* Description - description should be a template literal */}
            <Text className="px-6 m-0 mb-6 mx-auto max-w-[80%] text-center text-balance text-base text-zinc-500">
              {description}
            </Text>

            {/* Footer Top Section */}
            <Section className="m-0 p-0 mt-8 pt-6 pb-4 px-6 border-t border-solid border-[#eaeaea]">
              <Row className="w-fit">
                {socialItems.map((item, index) => (
                  <Column
                    key={index}
                    align={
                      index === 0 ? "right" : index === 1 ? "center" : "left"
                    }
                  >
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
            </Section>

            {/* Footer Mid Section */}
            <Container className="m-0 p-0 px-6 pb-6">
              <Text className="text-xs my-0 mb-1 text-zinc-500 text-center">
                {footerText}
              </Text>
              <Text className="text-xs my-0 text-zinc-500 text-center">
                {footerAddress}
              </Text>
            </Container>

            {/* Footer Bottom Section */}
            <Container>
              <Row className="m-0 p-0 mx-auto px-6 pb-6 w-80">
                <Column align="right">
                  <Text className="text-xs m-0 p-0 underline text-zinc-500 w-fit">
                    Unsubscribe
                  </Text>
                </Column>
                <Column align="center">
                  <Text className="text-xs m-0 p-0 underline text-zinc-500 w-fit">
                    Privacy Policy
                  </Text>
                </Column>
                <Column align="left">
                  <Text className="text-xs m-0 p-0 underline text-zinc-500 w-fit">
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

StatusSuccess.PreviewProps = {
  title: "You're all set!",
  description:
    "Your account has been successfully created. You can now start using our platform. If you have any questions, or need further guidance, please feel free to reach out to us.",
  logoImage: `${baseUrl}/static/logo.png`,
  statusImage: `${baseUrl}/static/assets/icon-check.png`,
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
} as StatusSuccessProps;

export default StatusSuccess;
