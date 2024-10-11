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

interface MonthlyUpdateProps {
  title: string;
  description: string;
  logoImage: string;
  mainContent: { image: string; title: string; description: string };
  suggestedContent: { image: string; title: string; description: string }[];
  socialItems: { icon: string; url: string }[];
  footerText: string;
  footerAddress: string;
}

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "";

export const MonthlyUpdate = ({
  title,
  description,
  logoImage,
  mainContent,
  suggestedContent,
  socialItems,
  footerText,
  footerAddress,
}: MonthlyUpdateProps) => {
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
            <Section className="p-6">
              <Row className="w-fit">
                <Column align="right">
                  <Img src={logoImage} width="96" alt="Logo Placeholder" />
                </Column>
              </Row>
            </Section>

            {/* Content - title, description, and contentItem[] */}
            <Heading className="text-black text-xl font-bold text-center m-0 mt-4 mb-4 px-6">
              {title}
            </Heading>

            {/* Description - description should be a template literal */}
            <Text className="px-6 m-0 mb-2 mx-auto max-w-[80%] text-center text-balance text-base text-zinc-500">
              {description}
            </Text>

            {/* Main Item - image, title, and description of mainContent */}
            <Section className="p-6 pb-0">
              <Row className="w-fit">
                <Column align="center">
                  <Img
                    src={mainContent.image}
                    width="100%"
                    alt="Placeholder Image"
                    className="h-auto rounded-md object-cover"
                  />
                </Column>
              </Row>
              <Row className="mt-3">
                <Column align="center">
                  <Text className="text-black text-lg font-semibold text-left m-0 mt-1 p-0">
                    {mainContent.title}
                  </Text>
                  <Text className="text-zinc-500 text-sm text-left m-0 mt-1 p-0">
                    {mainContent.description}
                  </Text>
                </Column>
              </Row>
            </Section>

            {/* Suggested Items Tablet+ - image, title, and description of suggestedContent[] */}
            <Section className="p-6 pb-0 hidden md:table">
              <Row>
                {suggestedContent.map((item, index) => (
                  <Column
                    align="center"
                    key={index}
                    className={index === 0 ? "pr-2" : "pl-2"}
                  >
                    <Img
                      src={item.image}
                      width="auto"
                      alt="Placeholder Image"
                      className="h-full max-h-32 aspect-[12/7] rounded-md object-cover"
                    />
                    <Text className="text-black text-sm font-semibold text-left m-0 mt-3 p-0 line-clamp-1">
                      {item.title}
                    </Text>
                    <Text className="text-zinc-500 text-xs text-left m-0 mt-1 p-0 line-clamp-2">
                      {item.description}
                    </Text>
                  </Column>
                ))}
              </Row>
            </Section>

            {/* Suggested Items Mobile - image, title, and description of suggestedContent[] */}
            <Section className="p-6 pb-0 md:hidden table">
              {suggestedContent.map((item, index) => (
                <React.Fragment key={index}>
                  <Row className="w-fit">
                    <Column align="center">
                      <Img
                        src={item.image}
                        width="100%"
                        alt="Placeholder Image"
                        className="h-auto aspect-[12/7] rounded-md object-cover"
                      />
                    </Column>
                  </Row>
                  <Row
                    className={`mt-3 ${
                      index === suggestedContent.length - 1 ? "" : "mb-6"
                    }`}
                  >
                    <Column align="center">
                      <Text className="text-black text-lg font-semibold text-left m-0 mt-1 p-0">
                        {item.title}
                      </Text>
                      <Text className="text-zinc-500 text-sm text-left m-0 mt-1 p-0">
                        {item.description}
                      </Text>
                    </Column>
                  </Row>
                </React.Fragment>
              ))}
            </Section>

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

MonthlyUpdate.PreviewProps = {
  title: "Your monthly update",
  description:
    "We have some exciting news to share with you this month. Read on to find out more.",
  logoImage: `${baseUrl}/static/logo.png`,
  mainContent: {
    image: `${baseUrl}/static/assets/gradient-1.png`,
    title: "Lorem Ipsum Dolor Sit Amet",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa placeat dicta sed nostrum ipsam neque.",
  },
  suggestedContent: [
    {
      image: `${baseUrl}/static/assets/gradient-1.png`,
      title: "Lorem Ipsum Dolor Sit",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      image: `${baseUrl}/static/assets/gradient-2.png`,
      title: "Sed Ut Perspiciatis Unde",
      description:
        "Sed ut perspiciatis unde omnis iste natus sit error sit voluptatem.",
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
} as MonthlyUpdateProps;

export default MonthlyUpdate;
