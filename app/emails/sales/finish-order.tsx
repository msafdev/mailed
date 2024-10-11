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

interface SocialItem {
  icon: string;
  url: string;
}

interface OrderItem {
  name: string;
  price: string;
  imageUrl: string;
}

interface Pricing {
  label: string;
  amount: string;
}

interface FinishOrderProps {
  title: string;
  description: string;
  buttonText: string;
  buttonUrl: string;
  logoImage: string;
  socialItems: SocialItem[];
  orderItems: OrderItem[];
  pricing: Pricing[];
  footerText: string;
  footerAddress: string;
}

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "";

export const FinishOrder = ({
  title,
  description,
  buttonText,
  buttonUrl,
  logoImage,
  socialItems,
  orderItems,
  pricing,
  footerText,
  footerAddress,
}: FinishOrderProps) => {
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

            {description.split("\n").map((item, index) => (
              <Text
                key={index}
                className="m-0 p-0 px-6 mt-4 text-left text-base text-zinc-500"
              >
                {item}
              </Text>
            ))}

            {/* Order Summary */}
            <Container className="px-6 my-8">
              <Section>
                <Row>
                  <Text className="m-0 p-0 text-zinc-500 text-sm">
                    Order Summary:
                  </Text>
                </Row>
                {orderItems.map((item, index) => (
                  <Row className="mt-2" key={index}>
                    <Column className="w-16">
                      <Img
                        src={item.imageUrl}
                        width="100%"
                        height="auto"
                        className="aspect-square rounded-md"
                      />
                    </Column>
                    <Column className="pl-3">
                      <Text className="m-0 p-0 text-black text-base font-bold">
                        {item.name}
                      </Text>
                      <Text className="m-0 p-0 text-zinc-500 text-sm">
                        {item.price}
                      </Text>
                    </Column>
                  </Row>
                ))}
                {pricing.map((priceItem, index) => (
                  <Row
                    className={
                      index === 0
                        ? "mt-3 pt-8 border-t border-solid border-[#eaeaea]"
                        : "mt-1"
                    }
                    key={index}
                  >
                    <Column align="right" className="w-2/3">
                      <Text className="m-0 p-0 text-zinc-500 text-sm">
                        {priceItem.label}
                      </Text>
                    </Column>
                    <Column align="right" className="w-1/3">
                      <Text className="m-0 p-0 text-black text-base">
                        {priceItem.amount}
                      </Text>
                    </Column>
                  </Row>
                ))}
              </Section>
            </Container>

            {/* Button */}
            <Container className="px-6">
              <Button
                className="bg-[#000000] rounded text-white text-base w-full font-medium no-underline text-center py-3"
                href={buttonUrl}
              >
                {buttonText}
              </Button>
            </Container>

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

FinishOrder.PreviewProps = {
  title: "Finish your order",
  description: `Hi User 💳,
  
  Thank you for your purchase. We've received your order and will begin processing it soon.`,
  buttonText: "Proceed to Checkout",
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
  orderItems: [
    {
      name: "Product One",
      price: "$12.00",
      imageUrl: `${baseUrl}/static/assets/gradient-2.png`,
    },
    {
      name: "Product Two",
      price: "$16.00",
      imageUrl: `${baseUrl}/static/assets/gradient-1.png`,
    },
    {
      name: "Product Three",
      price: "$16.00",
      imageUrl: `${baseUrl}/static/assets/gradient-1.png`,
    },
  ],
  pricing: [
    { label: "Subtotal", amount: "$28.00" },
    { label: "Shipping", amount: "$4.00" },
    { label: "Total", amount: "$32.00" },
  ],
  footerText: "© 2024 Mailed Inc. All rights reserved.",
  footerAddress: "1234 Mailed St, Mailed City, CA 94102",
} as FinishOrderProps;

export default FinishOrder;
