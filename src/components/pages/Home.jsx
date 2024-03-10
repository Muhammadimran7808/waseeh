import React, { useEffect, useState } from "react";
import Layout from "../layout/Layout";
import HeroSection from "../layout/HeroSection";
import axios from "axios";
import { BiSolidHeartCircle } from "react-icons/bi";

const Home = () => {
  const [products, setProducts] = useState([
    {
      id: 48,
      name: "home clock",
      slug: "home-clock",
      permalink: "http://localhost/wp/product/home-clock/",
      type: "simple",
      status: "publish",
      featured: false,
      catalog_visibility: "visible",
      description:
        "<p>home clock for wall home clock for wall home clock for wall home clock for wall home clock for wall home clock for wall home clock for wall...</p>\n",
      short_description: "<p>wall clock for home</p>\n",
      sku: "",
      price: "2500",
      regular_price: "3000",
      sale_price: "2500",
      button_text: "",
      tax_status: "taxable",
      tax_class: "",
      purchase_note: "",
      categories: [
        {
          id: 22,
          name: "clock",
          slug: "clock",
        },
      ],
      tags: [
        {
          id: 23,
          name: "clock",
          slug: "clock",
        },
      ],
      images: [
        {
          id: 41,
          src: "https://www.waseeh.com/cdn/shop/files/coffee-and-accent-tables_300x.jpg?v=1709793595",
          name: "w3",
          alt: "",
        },
        {
          id: 41,
          src: "https://www.waseeh.com/cdn/shop/files/KeaneCoffeeTableNatAV3QSSS24_300x.jpg?v=1709793597",
          name: "w3",
          alt: "",
        },
        {
          id: 42,
          src: "http://localhost/wp/wp-content/uploads/2024/03/1.png",
          name: "1",
          alt: "",
        },
        {
          id: 43,
          src: "http://localhost/wp/wp-content/uploads/2024/03/2.png",
          name: "2",
          alt: "",
        },
      ],
      attributes: [],
      default_attributes: [],
      variations: [],
      grouped_products: [],
      menu_order: 0,
      price_html:
        '<del aria-hidden="true"><span class="woocommerce-Price-amount amount"><bdi><span class="woocommerce-Price-currencySymbol">&#8360;</span>&nbsp;3,000</bdi></span></del> <ins><span class="woocommerce-Price-amount amount"><bdi><span class="woocommerce-Price-currencySymbol">&#8360;</span>&nbsp;2,500</bdi></span></ins>',
      related_ids: [],
      meta_data: [],
      stock_status: "instock",
      has_options: false,
      post_password: "",
      _links: {
        self: [
          {
            href: "http://localhost/wp/wp-json/wc/v3/products/48",
          },
        ],
        collection: [
          {
            href: "http://localhost/wp/wp-json/wc/v3/products",
          },
        ],
      },
    },
    {
      id: 48,
      name: "home clock",
      slug: "home-clock",
      permalink: "http://localhost/wp/product/home-clock/",
      type: "simple",
      status: "publish",
      featured: false,
      catalog_visibility: "visible",
      description:
        "<p>home clock for wall home clock for wall home clock for wall...</p>\n",
      short_description: "<p>wall clock for home</p>\n",
      sku: "",
      price: "2500",
      regular_price: "3000",
      sale_price: "2500",
      button_text: "",
      tax_status: "taxable",
      tax_class: "",
      purchase_note: "",
      categories: [
        {
          id: 22,
          name: "clock",
          slug: "clock",
        },
      ],
      tags: [
        {
          id: 23,
          name: "clock",
          slug: "clock",
        },
      ],
      images: [
        {
          id: 41,
          src: "https://www.waseeh.com/cdn/shop/files/coffee-and-accent-tables_300x.jpg?v=1709793595",
          name: "w3",
          alt: "",
        },
        {
          id: 41,
          src: "https://www.waseeh.com/cdn/shop/files/KeaneCoffeeTableNatAV3QSSS24_300x.jpg?v=1709793597",
          name: "w3",
          alt: "",
        },
        {
          id: 42,
          src: "http://localhost/wp/wp-content/uploads/2024/03/1.png",
          name: "1",
          alt: "",
        },
        {
          id: 43,
          src: "http://localhost/wp/wp-content/uploads/2024/03/2.png",
          name: "2",
          alt: "",
        },
      ],
      attributes: [],
      default_attributes: [],
      variations: [],
      grouped_products: [],
      menu_order: 0,
      price_html:
        '<del aria-hidden="true"><span class="woocommerce-Price-amount amount"><bdi><span class="woocommerce-Price-currencySymbol">&#8360;</span>&nbsp;3,000</bdi></span></del> <ins><span class="woocommerce-Price-amount amount"><bdi><span class="woocommerce-Price-currencySymbol">&#8360;</span>&nbsp;2,500</bdi></span></ins>',
      related_ids: [],
      meta_data: [],
      stock_status: "instock",
      has_options: false,
      post_password: "",
      _links: {
        self: [
          {
            href: "http://localhost/wp/wp-json/wc/v3/products/48",
          },
        ],
        collection: [
          {
            href: "http://localhost/wp/wp-json/wc/v3/products",
          },
        ],
      },
    },
    {
      id: 48,
      name: "home clock",
      slug: "home-clock",
      permalink: "http://localhost/wp/product/home-clock/",
      type: "simple",
      status: "publish",
      featured: false,
      catalog_visibility: "visible",
      description:
        "<p>home clock for wall home clock for wall home clock for wall...</p>\n",
      short_description: "<p>wall clock for home</p>\n",
      sku: "",
      price: "2500",
      regular_price: "3000",
      sale_price: "2500",
      button_text: "",
      tax_status: "taxable",
      tax_class: "",
      purchase_note: "",
      categories: [
        {
          id: 22,
          name: "clock",
          slug: "clock",
        },
      ],
      tags: [
        {
          id: 23,
          name: "clock",
          slug: "clock",
        },
      ],
      images: [
        {
          id: 41,
          src: "https://www.waseeh.com/cdn/shop/files/coffee-and-accent-tables_300x.jpg?v=1709793595",
          name: "w3",
          alt: "",
        },
        {
          id: 41,
          src: "https://www.waseeh.com/cdn/shop/files/KeaneCoffeeTableNatAV3QSSS24_300x.jpg?v=1709793597",
          name: "w3",
          alt: "",
        },
        {
          id: 42,
          src: "http://localhost/wp/wp-content/uploads/2024/03/1.png",
          name: "1",
          alt: "",
        },
        {
          id: 43,
          src: "http://localhost/wp/wp-content/uploads/2024/03/2.png",
          name: "2",
          alt: "",
        },
      ],
      attributes: [],
      default_attributes: [],
      variations: [],
      grouped_products: [],
      menu_order: 0,
      price_html:
        '<del aria-hidden="true"><span class="woocommerce-Price-amount amount"><bdi><span class="woocommerce-Price-currencySymbol">&#8360;</span>&nbsp;3,000</bdi></span></del> <ins><span class="woocommerce-Price-amount amount"><bdi><span class="woocommerce-Price-currencySymbol">&#8360;</span>&nbsp;2,500</bdi></span></ins>',
      related_ids: [],
      meta_data: [],
      stock_status: "instock",
      has_options: false,
      post_password: "",
      _links: {
        self: [
          {
            href: "http://localhost/wp/wp-json/wc/v3/products/48",
          },
        ],
        collection: [
          {
            href: "http://localhost/wp/wp-json/wc/v3/products",
          },
        ],
      },
    },
    {
      id: 48,
      name: "home clock",
      slug: "home-clock",
      permalink: "http://localhost/wp/product/home-clock/",
      type: "simple",
      status: "publish",
      featured: false,
      catalog_visibility: "visible",
      description:
        "<p>home clock for wall home clock for wall home clock for wall...</p>\n",
      short_description: "<p>wall clock for home</p>\n",
      sku: "",
      price: "2500",
      regular_price: "3000",
      sale_price: "2500",
      button_text: "",
      tax_status: "taxable",
      tax_class: "",
      purchase_note: "",
      categories: [
        {
          id: 22,
          name: "clock",
          slug: "clock",
        },
      ],
      tags: [
        {
          id: 23,
          name: "clock",
          slug: "clock",
        },
      ],
      images: [
        {
          id: 41,
          src: "https://www.waseeh.com/cdn/shop/files/coffee-and-accent-tables_300x.jpg?v=1709793595",
          name: "w3",
          alt: "",
        },
        {
          id: 41,
          src: "https://www.waseeh.com/cdn/shop/files/KeaneCoffeeTableNatAV3QSSS24_300x.jpg?v=1709793597",
          name: "w3",
          alt: "",
        },
        {
          id: 42,
          src: "http://localhost/wp/wp-content/uploads/2024/03/1.png",
          name: "1",
          alt: "",
        },
        {
          id: 43,
          src: "http://localhost/wp/wp-content/uploads/2024/03/2.png",
          name: "2",
          alt: "",
        },
      ],
      attributes: [],
      default_attributes: [],
      variations: [],
      grouped_products: [],
      menu_order: 0,
      price_html:
        '<del aria-hidden="true"><span class="woocommerce-Price-amount amount"><bdi><span class="woocommerce-Price-currencySymbol">&#8360;</span>&nbsp;3,000</bdi></span></del> <ins><span class="woocommerce-Price-amount amount"><bdi><span class="woocommerce-Price-currencySymbol">&#8360;</span>&nbsp;2,500</bdi></span></ins>',
      related_ids: [],
      meta_data: [],
      stock_status: "instock",
      has_options: false,
      post_password: "",
      _links: {
        self: [
          {
            href: "http://localhost/wp/wp-json/wc/v3/products/48",
          },
        ],
        collection: [
          {
            href: "http://localhost/wp/wp-json/wc/v3/products",
          },
        ],
      },
    },
    {
      id: 48,
      name: "home clock",
      slug: "home-clock",
      permalink: "http://localhost/wp/product/home-clock/",
      type: "simple",
      status: "publish",
      featured: false,
      catalog_visibility: "visible",
      description:
        "<p>home clock for wall home clock for wall home clock for wall...</p>\n",
      short_description: "<p>wall clock for home</p>\n",
      sku: "",
      price: "2500",
      regular_price: "3000",
      sale_price: "2500",
      button_text: "",
      tax_status: "taxable",
      tax_class: "",
      purchase_note: "",
      categories: [
        {
          id: 22,
          name: "clock",
          slug: "clock",
        },
      ],
      tags: [
        {
          id: 23,
          name: "clock",
          slug: "clock",
        },
      ],
      images: [
        {
          id: 41,
          src: "https://www.waseeh.com/cdn/shop/files/coffee-and-accent-tables_300x.jpg?v=1709793595",
          name: "w3",
          alt: "",
        },
        {
          id: 41,
          src: "https://www.waseeh.com/cdn/shop/files/KeaneCoffeeTableNatAV3QSSS24_300x.jpg?v=1709793597",
          name: "w3",
          alt: "",
        },
        {
          id: 42,
          src: "http://localhost/wp/wp-content/uploads/2024/03/1.png",
          name: "1",
          alt: "",
        },
        {
          id: 43,
          src: "http://localhost/wp/wp-content/uploads/2024/03/2.png",
          name: "2",
          alt: "",
        },
      ],
      attributes: [],
      default_attributes: [],
      variations: [],
      grouped_products: [],
      menu_order: 0,
      price_html:
        '<del aria-hidden="true"><span class="woocommerce-Price-amount amount"><bdi><span class="woocommerce-Price-currencySymbol">&#8360;</span>&nbsp;3,000</bdi></span></del> <ins><span class="woocommerce-Price-amount amount"><bdi><span class="woocommerce-Price-currencySymbol">&#8360;</span>&nbsp;2,500</bdi></span></ins>',
      related_ids: [],
      meta_data: [],
      stock_status: "instock",
      has_options: false,
      post_password: "",
      _links: {
        self: [
          {
            href: "http://localhost/wp/wp-json/wc/v3/products/48",
          },
        ],
        collection: [
          {
            href: "http://localhost/wp/wp-json/wc/v3/products",
          },
        ],
      },
    },
    {
      id: 48,
      name: "home clock",
      slug: "home-clock",
      permalink: "http://localhost/wp/product/home-clock/",
      type: "simple",
      status: "publish",
      featured: false,
      catalog_visibility: "visible",
      description:
        "<p>home clock for wall home clock for wall home clock for wall...</p>\n",
      short_description: "<p>wall clock for home</p>\n",
      sku: "",
      price: "2500",
      regular_price: "3000",
      sale_price: "2500",
      button_text: "",
      tax_status: "taxable",
      tax_class: "",
      purchase_note: "",
      categories: [
        {
          id: 22,
          name: "clock",
          slug: "clock",
        },
      ],
      tags: [
        {
          id: 23,
          name: "clock",
          slug: "clock",
        },
      ],
      images: [
        {
          id: 41,
          src: "https://www.waseeh.com/cdn/shop/files/coffee-and-accent-tables_300x.jpg?v=1709793595",
          name: "w3",
          alt: "",
        },
        {
          id: 41,
          src: "https://www.waseeh.com/cdn/shop/files/KeaneCoffeeTableNatAV3QSSS24_300x.jpg?v=1709793597",
          name: "w3",
          alt: "",
        },
        {
          id: 42,
          src: "http://localhost/wp/wp-content/uploads/2024/03/1.png",
          name: "1",
          alt: "",
        },
        {
          id: 43,
          src: "http://localhost/wp/wp-content/uploads/2024/03/2.png",
          name: "2",
          alt: "",
        },
      ],
      attributes: [],
      default_attributes: [],
      variations: [],
      grouped_products: [],
      menu_order: 0,
      price_html:
        '<del aria-hidden="true"><span class="woocommerce-Price-amount amount"><bdi><span class="woocommerce-Price-currencySymbol">&#8360;</span>&nbsp;3,000</bdi></span></del> <ins><span class="woocommerce-Price-amount amount"><bdi><span class="woocommerce-Price-currencySymbol">&#8360;</span>&nbsp;2,500</bdi></span></ins>',
      related_ids: [],
      meta_data: [],
      stock_status: "instock",
      has_options: false,
      post_password: "",
      _links: {
        self: [
          {
            href: "http://localhost/wp/wp-json/wc/v3/products/48",
          },
        ],
        collection: [
          {
            href: "http://localhost/wp/wp-json/wc/v3/products",
          },
        ],
      },
    },
    {
      id: 48,
      name: "home clock",
      slug: "home-clock",
      permalink: "http://localhost/wp/product/home-clock/",
      type: "simple",
      status: "publish",
      featured: false,
      catalog_visibility: "visible",
      description:
        "<p>home clock for wall home clock for wall home clock for wall...</p>\n",
      short_description: "<p>wall clock for home</p>\n",
      sku: "",
      price: "2500",
      regular_price: "3000",
      sale_price: "2500",
      button_text: "",
      tax_status: "taxable",
      tax_class: "",
      purchase_note: "",
      categories: [
        {
          id: 22,
          name: "clock",
          slug: "clock",
        },
      ],
      tags: [
        {
          id: 23,
          name: "clock",
          slug: "clock",
        },
      ],
      images: [
        {
          id: 41,
          src: "https://www.waseeh.com/cdn/shop/files/coffee-and-accent-tables_300x.jpg?v=1709793595",
          name: "w3",
          alt: "",
        },
        {
          id: 41,
          src: "https://www.waseeh.com/cdn/shop/files/KeaneCoffeeTableNatAV3QSSS24_300x.jpg?v=1709793597",
          name: "w3",
          alt: "",
        },
        {
          id: 42,
          src: "http://localhost/wp/wp-content/uploads/2024/03/1.png",
          name: "1",
          alt: "",
        },
        {
          id: 43,
          src: "http://localhost/wp/wp-content/uploads/2024/03/2.png",
          name: "2",
          alt: "",
        },
      ],
      attributes: [],
      default_attributes: [],
      variations: [],
      grouped_products: [],
      menu_order: 0,
      price_html:
        '<del aria-hidden="true"><span class="woocommerce-Price-amount amount"><bdi><span class="woocommerce-Price-currencySymbol">&#8360;</span>&nbsp;3,000</bdi></span></del> <ins><span class="woocommerce-Price-amount amount"><bdi><span class="woocommerce-Price-currencySymbol">&#8360;</span>&nbsp;2,500</bdi></span></ins>',
      related_ids: [],
      meta_data: [],
      stock_status: "instock",
      has_options: false,
      post_password: "",
      _links: {
        self: [
          {
            href: "http://localhost/wp/wp-json/wc/v3/products/48",
          },
        ],
        collection: [
          {
            href: "http://localhost/wp/wp-json/wc/v3/products",
          },
        ],
      },
    },
    {
      id: 46,
      name: "Trendy watch",
      slug: "",
      permalink: "http://localhost/wp/?post_type=product&p=46",
      type: "simple",
      status: "draft",
      featured: false,
      catalog_visibility: "visible",
      description: "<p>Trendy watch for mens in ver low price</p>\n",
      short_description: "<p>trendy watch for mens.</p>\n",
      sku: "",
      price: "6000",
      regular_price: "10000",
      sale_price: "6000",
      button_text: "",
      tax_status: "taxable",
      tax_class: "",
      purchase_note: "",
      categories: [
        {
          id: 18,
          name: "watch",
          slug: "watch",
        },
      ],
      tags: [
        {
          id: 19,
          name: "watch",
          slug: "watch",
        },
      ],
      images: [
        {
          id: 47,
          src: "http://localhost/wp/wp-content/uploads/2024/03/m1-1.png",
          name: "m1",
          alt: "watch",
        },
        {
          id: 47,
          src: "http://localhost/wp/wp-content/uploads/2024/03/m1-1.png",
          name: "m1",
          alt: "watch",
        },
        {
          id: 39,
          src: "http://localhost/wp/wp-content/uploads/2024/03/e1-4.png",
          name: "e1",
          alt: "",
        },
        {
          id: 40,
          src: "http://localhost/wp/wp-content/uploads/2024/03/m1.png",
          name: "m1",
          alt: "",
        },
      ],
      attributes: [
        {
          id: 0,
          name: "color",
          slug: "color",
          position: 0,
          visible: true,
          variation: false,
          options: ["gray"],
        },
      ],
      default_attributes: [],
      variations: [],
      grouped_products: [],
      menu_order: 0,
      price_html:
        '<del aria-hidden="true"><span class="woocommerce-Price-amount amount"><bdi><span class="woocommerce-Price-currencySymbol">&#8360;</span>&nbsp;10,000</bdi></span></del> <ins><span class="woocommerce-Price-amount amount"><bdi><span class="woocommerce-Price-currencySymbol">&#8360;</span>&nbsp;6,000</bdi></span></ins>',
      related_ids: [37],
      meta_data: [],
      stock_status: "instock",
      has_options: false,
      post_password: "",
      _links: {
        self: [
          {
            href: "http://localhost/wp/wp-json/wc/v3/products/46",
          },
        ],
        collection: [
          {
            href: "http://localhost/wp/wp-json/wc/v3/products",
          },
        ],
      },
    },
    {
      id: 37,
      name: "smart watch",
      slug: "smart-watch",
      permalink: "http://localhost/wp/product/smart-watch/",
      type: "simple",
      status: "publish",
      featured: false,
      catalog_visibility: "visible",
      description:
        "<p>This is smart watch product description. This is smart watch product description.</p>\n",
      short_description: "<p>smart watch for men.</p>\n",
      sku: "",
      price: "12999",
      regular_price: "15000",
      sale_price: "12999",
      button_text: "",
      tax_status: "taxable",
      tax_class: "",
      manage_stock: true,
      stock_quantity: 103,
      backorders: "no",
      backorders_allowed: false,
      backordered: false,
      low_stock_amount: 2,
      sold_individually: false,
      weight: "",
      dimensions: {
        length: "",
        width: "",
        height: "",
      },
      purchase_note: "",
      categories: [
        {
          id: 18,
          name: "watch",
          slug: "watch",
        },
      ],
      tags: [
        {
          id: 21,
          name: "mens watch",
          slug: "mens-watch",
        },
        {
          id: 20,
          name: "smart watch",
          slug: "smart-watch",
        },
        {
          id: 19,
          name: "watch",
          slug: "watch",
        },
      ],
      images: [
        {
          id: 38,
          src: "http://localhost/wp/wp-content/uploads/2024/03/e1-3.png",
          name: "smart watch",
          alt: "watch-image",
        },
        {
          id: 39,
          src: "http://localhost/wp/wp-content/uploads/2024/03/e1-4.png",
          name: "e1",
          alt: "",
        },
        {
          id: 42,
          src: "http://localhost/wp/wp-content/uploads/2024/03/1.png",
          name: "1",
          alt: "",
        },
        {
          id: 43,
          src: "http://localhost/wp/wp-content/uploads/2024/03/2.png",
          name: "2",
          alt: "",
        },
      ],
      attributes: [
        {
          id: 0,
          name: "color",
          slug: "color",
          position: 0,
          visible: true,
          variation: false,
          options: ["Black", "Yellow"],
        },
      ],
      default_attributes: [],
      variations: [],
      grouped_products: [],
      menu_order: 0,
      price_html:
        '<del aria-hidden="true"><span class="woocommerce-Price-amount amount"><bdi><span class="woocommerce-Price-currencySymbol">&#8360;</span>&nbsp;15,000</bdi></span></del> <ins><span class="woocommerce-Price-amount amount"><bdi><span class="woocommerce-Price-currencySymbol">&#8360;</span>&nbsp;12,999</bdi></span></ins>',
      related_ids: [],
      meta_data: [],
      stock_status: "instock",
      has_options: false,
      post_password: "",
      _links: {
        self: [
          {
            href: "http://localhost/wp/wp-json/wc/v3/products/37",
          },
        ],
        collection: [
          {
            href: "http://localhost/wp/wp-json/wc/v3/products",
          },
        ],
      },
    },
    {
      id: 37,
      name: "smart watch",
      slug: "smart-watch",
      permalink: "http://localhost/wp/product/smart-watch/",
      type: "simple",
      status: "publish",
      featured: false,
      catalog_visibility: "visible",
      description:
        "<p>This is smart watch product description. This is smart watch product description.</p>\n",
      short_description: "<p>smart watch for men.</p>\n",
      sku: "",
      price: "12999",
      regular_price: "15000",
      sale_price: "12999",
      button_text: "",
      tax_status: "taxable",
      tax_class: "",
      manage_stock: true,
      stock_quantity: 103,
      backorders: "no",
      backorders_allowed: false,
      backordered: false,
      low_stock_amount: 2,
      sold_individually: false,
      weight: "",
      dimensions: {
        length: "",
        width: "",
        height: "",
      },
      purchase_note: "",
      categories: [
        {
          id: 18,
          name: "watch",
          slug: "watch",
        },
      ],
      tags: [
        {
          id: 21,
          name: "mens watch",
          slug: "mens-watch",
        },
        {
          id: 20,
          name: "smart watch",
          slug: "smart-watch",
        },
        {
          id: 19,
          name: "watch",
          slug: "watch",
        },
      ],
      images: [
        {
          id: 38,
          src: "http://localhost/wp/wp-content/uploads/2024/03/e1-3.png",
          name: "smart watch",
          alt: "watch-image",
        },
        {
          id: 39,
          src: "http://localhost/wp/wp-content/uploads/2024/03/e1-4.png",
          name: "e1",
          alt: "",
        },
        {
          id: 42,
          src: "http://localhost/wp/wp-content/uploads/2024/03/1.png",
          name: "1",
          alt: "",
        },
        {
          id: 43,
          src: "http://localhost/wp/wp-content/uploads/2024/03/2.png",
          name: "2",
          alt: "",
        },
      ],
      attributes: [
        {
          id: 0,
          name: "color",
          slug: "color",
          position: 0,
          visible: true,
          variation: false,
          options: ["Black", "Yellow"],
        },
      ],
      default_attributes: [],
      variations: [],
      grouped_products: [],
      menu_order: 0,
      price_html:
        '<del aria-hidden="true"><span class="woocommerce-Price-amount amount"><bdi><span class="woocommerce-Price-currencySymbol">&#8360;</span>&nbsp;15,000</bdi></span></del> <ins><span class="woocommerce-Price-amount amount"><bdi><span class="woocommerce-Price-currencySymbol">&#8360;</span>&nbsp;12,999</bdi></span></ins>',
      related_ids: [],
      meta_data: [],
      stock_status: "instock",
      has_options: false,
      post_password: "",
      _links: {
        self: [
          {
            href: "http://localhost/wp/wp-json/wc/v3/products/37",
          },
        ],
        collection: [
          {
            href: "http://localhost/wp/wp-json/wc/v3/products",
          },
        ],
      },
    },
    {
      id: 37,
      name: "smart watch",
      slug: "smart-watch",
      permalink: "http://localhost/wp/product/smart-watch/",
      type: "simple",
      status: "publish",
      featured: false,
      catalog_visibility: "visible",
      description:
        "<p>This is smart watch product description. This is smart watch product description.</p>\n",
      short_description: "<p>smart watch for men.</p>\n",
      sku: "",
      price: "12999",
      regular_price: "15000",
      sale_price: "12999",
      button_text: "",
      tax_status: "taxable",
      tax_class: "",
      manage_stock: true,
      stock_quantity: 103,
      backorders: "no",
      backorders_allowed: false,
      backordered: false,
      low_stock_amount: 2,
      sold_individually: false,
      weight: "",
      dimensions: {
        length: "",
        width: "",
        height: "",
      },
      purchase_note: "",
      categories: [
        {
          id: 18,
          name: "watch",
          slug: "watch",
        },
      ],
      tags: [
        {
          id: 21,
          name: "mens watch",
          slug: "mens-watch",
        },
        {
          id: 20,
          name: "smart watch",
          slug: "smart-watch",
        },
        {
          id: 19,
          name: "watch",
          slug: "watch",
        },
      ],
      images: [
        {
          id: 38,
          src: "http://localhost/wp/wp-content/uploads/2024/03/e1-3.png",
          name: "smart watch",
          alt: "watch-image",
        },
        {
          id: 39,
          src: "http://localhost/wp/wp-content/uploads/2024/03/e1-4.png",
          name: "e1",
          alt: "",
        },
        {
          id: 42,
          src: "http://localhost/wp/wp-content/uploads/2024/03/1.png",
          name: "1",
          alt: "",
        },
        {
          id: 43,
          src: "http://localhost/wp/wp-content/uploads/2024/03/2.png",
          name: "2",
          alt: "",
        },
      ],
      attributes: [
        {
          id: 0,
          name: "color",
          slug: "color",
          position: 0,
          visible: true,
          variation: false,
          options: ["Black", "Yellow"],
        },
      ],
      default_attributes: [],
      variations: [],
      grouped_products: [],
      menu_order: 0,
      price_html:
        '<del aria-hidden="true"><span class="woocommerce-Price-amount amount"><bdi><span class="woocommerce-Price-currencySymbol">&#8360;</span>&nbsp;15,000</bdi></span></del> <ins><span class="woocommerce-Price-amount amount"><bdi><span class="woocommerce-Price-currencySymbol">&#8360;</span>&nbsp;12,999</bdi></span></ins>',
      related_ids: [],
      meta_data: [],
      stock_status: "instock",
      has_options: false,
      post_password: "",
      _links: {
        self: [
          {
            href: "http://localhost/wp/wp-json/wc/v3/products/37",
          },
        ],
        collection: [
          {
            href: "http://localhost/wp/wp-json/wc/v3/products",
          },
        ],
      },
    },
    {
      id: 37,
      name: "smart watch",
      slug: "smart-watch",
      permalink: "http://localhost/wp/product/smart-watch/",
      type: "simple",
      status: "publish",
      featured: false,
      catalog_visibility: "visible",
      description:
        "<p>This is smart watch product description. This is smart watch product description.</p>\n",
      short_description: "<p>smart watch for men.</p>\n",
      sku: "",
      price: "12999",
      regular_price: "15000",
      sale_price: "12999",
      button_text: "",
      tax_status: "taxable",
      tax_class: "",
      manage_stock: true,
      stock_quantity: 103,
      backorders: "no",
      backorders_allowed: false,
      backordered: false,
      low_stock_amount: 2,
      sold_individually: false,
      weight: "",
      dimensions: {
        length: "",
        width: "",
        height: "",
      },
      purchase_note: "",
      categories: [
        {
          id: 18,
          name: "watch",
          slug: "watch",
        },
      ],
      tags: [
        {
          id: 21,
          name: "mens watch",
          slug: "mens-watch",
        },
        {
          id: 20,
          name: "smart watch",
          slug: "smart-watch",
        },
        {
          id: 19,
          name: "watch",
          slug: "watch",
        },
      ],
      images: [
        {
          id: 38,
          src: "http://localhost/wp/wp-content/uploads/2024/03/e1-3.png",
          name: "smart watch",
          alt: "watch-image",
        },
        {
          id: 39,
          src: "http://localhost/wp/wp-content/uploads/2024/03/e1-4.png",
          name: "e1",
          alt: "",
        },
        {
          id: 42,
          src: "http://localhost/wp/wp-content/uploads/2024/03/1.png",
          name: "1",
          alt: "",
        },
        {
          id: 43,
          src: "http://localhost/wp/wp-content/uploads/2024/03/2.png",
          name: "2",
          alt: "",
        },
      ],
      attributes: [
        {
          id: 0,
          name: "color",
          slug: "color",
          position: 0,
          visible: true,
          variation: false,
          options: ["Black", "Yellow"],
        },
      ],
      default_attributes: [],
      variations: [],
      grouped_products: [],
      menu_order: 0,
      price_html:
        '<del aria-hidden="true"><span class="woocommerce-Price-amount amount"><bdi><span class="woocommerce-Price-currencySymbol">&#8360;</span>&nbsp;15,000</bdi></span></del> <ins><span class="woocommerce-Price-amount amount"><bdi><span class="woocommerce-Price-currencySymbol">&#8360;</span>&nbsp;12,999</bdi></span></ins>',
      related_ids: [],
      meta_data: [],
      stock_status: "instock",
      has_options: false,
      post_password: "",
      _links: {
        self: [
          {
            href: "http://localhost/wp/wp-json/wc/v3/products/37",
          },
        ],
        collection: [
          {
            href: "http://localhost/wp/wp-json/wc/v3/products",
          },
        ],
      },
    },
    {
      id: 37,
      name: "smart watch",
      slug: "smart-watch",
      permalink: "http://localhost/wp/product/smart-watch/",
      type: "simple",
      status: "publish",
      featured: false,
      catalog_visibility: "visible",
      description:
        "<p>This is smart watch product description. This is smart watch product description.</p>\n",
      short_description: "<p>smart watch for men.</p>\n",
      sku: "",
      price: "12999",
      regular_price: "15000",
      sale_price: "12999",
      button_text: "",
      tax_status: "taxable",
      tax_class: "",
      manage_stock: true,
      stock_quantity: 103,
      backorders: "no",
      backorders_allowed: false,
      backordered: false,
      low_stock_amount: 2,
      sold_individually: false,
      weight: "",
      dimensions: {
        length: "",
        width: "",
        height: "",
      },
      purchase_note: "",
      categories: [
        {
          id: 18,
          name: "watch",
          slug: "watch",
        },
      ],
      tags: [
        {
          id: 21,
          name: "mens watch",
          slug: "mens-watch",
        },
        {
          id: 20,
          name: "smart watch",
          slug: "smart-watch",
        },
        {
          id: 19,
          name: "watch",
          slug: "watch",
        },
      ],
      images: [
        {
          id: 38,
          src: "http://localhost/wp/wp-content/uploads/2024/03/e1-3.png",
          name: "smart watch",
          alt: "watch-image",
        },
        {
          id: 39,
          src: "http://localhost/wp/wp-content/uploads/2024/03/e1-4.png",
          name: "e1",
          alt: "",
        },
        {
          id: 42,
          src: "http://localhost/wp/wp-content/uploads/2024/03/1.png",
          name: "1",
          alt: "",
        },
        {
          id: 43,
          src: "http://localhost/wp/wp-content/uploads/2024/03/2.png",
          name: "2",
          alt: "",
        },
      ],
      attributes: [
        {
          id: 0,
          name: "color",
          slug: "color",
          position: 0,
          visible: true,
          variation: false,
          options: ["Black", "Yellow"],
        },
      ],
      default_attributes: [],
      variations: [],
      grouped_products: [],
      menu_order: 0,
      price_html:
        '<del aria-hidden="true"><span class="woocommerce-Price-amount amount"><bdi><span class="woocommerce-Price-currencySymbol">&#8360;</span>&nbsp;15,000</bdi></span></del> <ins><span class="woocommerce-Price-amount amount"><bdi><span class="woocommerce-Price-currencySymbol">&#8360;</span>&nbsp;12,999</bdi></span></ins>',
      related_ids: [],
      meta_data: [],
      stock_status: "instock",
      has_options: false,
      post_password: "",
      _links: {
        self: [
          {
            href: "http://localhost/wp/wp-json/wc/v3/products/37",
          },
        ],
        collection: [
          {
            href: "http://localhost/wp/wp-json/wc/v3/products",
          },
        ],
      },
    },
  ]);
  // let defaultHeaders = {
  //   params: {},
  //   withCredentials: true,
  //   auth: {
  //     username: "ck_c82fe7f124dada7a39c6bde2996c604428840dbb",
  //     password: "cs_a4ad050a78b860f8deb9c90f102b7821ba76b0db",
  //   },
  // };

  // const getProducts = async () => {
  //   try {
  //     const res = await axios.get(
  //       "http://localhost/wp/wp-json/wc/v3/products",
  //       defaultHeaders
  //     );
  //     setProducts(res?.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   getProducts();
  // }, []);

  return (
    <Layout>
      <HeroSection />

      <div>
        <h1 className="text-center text-2xl font-semibold my-8">
          NEW ARRIVALS
        </h1>
        {/* product container */}
        <div className="flex flex-wrap justify-center gap-x-8 items-center md:w-[85%] sm:w-[90%] sm:mx-auto">
          {products.map((product) => (
            /*card container */
            <div className="card-container relative w-[200px] h-[400px]">
              {/* product card */}
              <div key={product.id} className="">
                {product.images.length > 0 && (
                  <img
                    src={product.images[0].src}
                    alt={product.images[0].alt}
                    className="w-[200px] h-[200px] object-cover "
                  />
                )}

                {/* discount lable */}
                <div className="product-label">
                  <strong className="label sale-label">
                    -
                    {Math.floor(
                      ((product.regular_price - product.price) /
                        product.regular_price) *
                        100
                    )}
                    %
                  </strong>
                  <br />
                </div>

                <div
                  className="mt-2 px-1 text-[13px] text-gray-700 text-center font-[550]"
                  dangerouslySetInnerHTML={{ __html: product.description }}
                ></div>

                <div className="flex flex-wrap justify-center text-[14px] gap-3 mt-2 font-semibold">
                  <p className="line-through text-gray-400">
                    Rs.{product.regular_price}
                  </p>
                  <p className="text-[#F58634]">Rs.{product.price}</p>
                </div>
              </div>

              {/* When hover on product card */}
              <div className="card-hover-content hidden bg-[#f7f5f5b9] absolute top-0 w-full h-[200px]  z-[1]">
                <div className="h-[200px] flex flex-col gap-4 pt-6 items-center">
                  <BiSolidHeartCircle size={25} className="text-[#e28206]" />
                  <button className="w-full border border-black bg-white hover:bg-black hover:text-white py-[8px] text-[14px] font-semibold uppercase">
                    Add to cart
                  </button>
                  <div>
                    <i class="fa-regular fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                  </div>
                  <button className="absolute bg-[#e28206] text-gray-200 w-full bottom-0 uppercase px-1">
                    quick view
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Home;
