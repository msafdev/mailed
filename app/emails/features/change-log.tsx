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

interface SocialItem {
  icon: string;
  url: string;
}

interface Change {
  type: string;
  description: string;
}

interface ReleaseItem {
  version: string;
  date: string;
  changes: Change[];
}

interface ChangeLogProps {
  title: string;
  description: string;
  buttonText: string;
  buttonUrl: string;
  logoImage: string;
  releaseItems: ReleaseItem[];
  socialItems: SocialItem[];
  footerText: string;
  footerAddress: string;
}

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "";

export const ChangeLog = ({
  title,
  description,
  logoImage,
  releaseItems,
  socialItems,
  footerText,
  footerAddress,
}: ChangeLogProps) => {
  const getTypeClass = (type: string) => {
    switch (type) {
      case "Fix":
        return "text-red-600 bg-red-500/20";
      case "Improve":
        return "text-green-600 bg-green-500/20";
      case "Feature":
        return "text-blue-600 bg-blue-500/20";
      default:
        return "text-gray-600 bg-gray-500/20";
    }
  };

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

            {/* Content - title, description, and releaseItems */}
            <Heading className="text-black text-xl font-bold text-center m-0 mt-4 px-6">
              {title}
            </Heading>

            {/* Description */}
            <Text className="px-6 m-0 mt-4 mx-auto mb-8 text-center max-w-[80%] text-balance text-base text-zinc-500">
              {description}
            </Text>

            {/* Release Items */}
            {releaseItems.map((release, index) => (
              <Section key={index}>
                <Row className="border-0 border-t border-solid border-[#eaeaea] px-6">
                  {/* Tablet+ */}
                  <Column
                    className="w-24 pr-4 hidden md:table-cell border-0 border-r border-solid border-[#eaeaea] py-6"
                    style={{
                      verticalAlign: "top",
                    }}
                  >
                    <Text className="text-blue-500 text-sm font-bold text-left m-0 p-0">
                      {release.version}
                    </Text>
                  </Column>

                  <Column
                    align="left"
                    className="p-0 py-6 md:pl-6"
                    style={{
                      verticalAlign: "top",
                    }}
                  >
                    <Text className="block md:hidden text-blue-500 text-xs font-bold text-left m-0 p-0">
                      {release.version}
                    </Text>
                    <Text className="text-black text-sm md:text-base font-bold text-left m-0 mt-3 md:mt-0 p-0">
                      {release.date}
                    </Text>
                    {release.changes.map((change, idx) => (
                      <Row className="mt-3 w-full" key={idx}>
                        <Column className="min-w-20 md:w-1/3 w-1/4">
                          <Text
                            className={`${getTypeClass(
                              change.type
                            )} w-fit text-xs text-left m-0 mr-3 p-0 py-0.5 px-3 rounded-full`}
                          >
                            {change.type}
                          </Text>
                        </Column>
                        <Column className="w-full">
                          <Text className="text-zinc-500 w-auto text-xs md:text-sm sm:text-left text-right m-0 p-0">
                            {change.description}
                          </Text>
                        </Column>
                      </Row>
                    ))}
                  </Column>
                </Row>
              </Section>
            ))}

            {/* Footer Top Section */}
            <Container className="m-0 p-0 pt-6 px-6 border-t border-solid border-[#eaeaea]">
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

ChangeLog.PreviewProps = {
  title: "Release Notes v1.0.0",
  description:
    "Hey! Say hello to the new features and improvements in v1.0.0. Check out the release notes below.",
  buttonText: "Join the team",
  buttonUrl: "https://example.com",
  logoImage: `${baseUrl}/static/logo.png`,
  releaseItems: [
    {
      version: "1.0.0-alpha",
      date: "Jul 03, 2024",
      changes: [
        { type: "Feature", description: "Add new usage dashboard" },
        { type: "Improve", description: "Update API documentation" },
        { type: "Fix", description: "Fix minor bugs" },
      ],
    },
    {
      version: "1.0.0-pre",
      date: "June 30, 2024",
      changes: [
        { type: "Fix", description: "Add error handler on login" },
        { type: "Improve", description: "Add rate-limit to API" },
        { type: "Feature", description: "Add new MRR dashboard" },
      ],
    },
    {
      version: "1.0.0-beta",
      date: "Jun 21, 2024",
      changes: [
        { type: "Feature", description: "Introduce dark mode" },
        { type: "Improve", description: "Optimize performance" },
      ],
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
} as ChangeLogProps;

export default ChangeLog;
