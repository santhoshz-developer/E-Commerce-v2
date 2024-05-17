import { gql } from "@apollo/client";

export const QUERY = gql`
  query GetHomes {
    homes {
      data {
        attributes {
          header {
            title
            logo {
              data {
                attributes {
                  url
                }
              }
            }
            headerbutton {
              title
              link
              color
              isnew
              type
            }
          }
          navbar {
            title
            link
            type
          }
          topmain {
            title
            link
            image {
              data {
                attributes {
                  url
                }
              }
            }
            frame1 {
              data {
                attributes {
                  url
                }
              }
            }
            colors
            description
            topbutton {
              title
              link
              color
              isnew
              type
            }
            frame2 {
              data {
                attributes {
                  url
                }
              }
            }
          }
          brands {
            brandlogo {
              data {
                attributes {
                  url
                }
              }
            }
          }
          categorey {
            title
            images {
              brandlogo {
                data {
                  attributes {
                    url
                  }
                }
              }
              productname
              productcount
              color
            }
          }
          productitems {
            navbar {
              title
              link
            }
            filterbutton {
              title
              link
              color
              type
            }
            cards {
              title
              content
              prize
              link
              color
            }
            cardimage {
              image {
                data {
                  attributes {
                    url
                  }
                }
              }
            }
            title
          }
          brandbanner {
            description
            button {
              title
              link
              color
              isnew
              type
            }
            backgroundimage {
              image {
                data {
                  attributes {
                    url
                  }
                }
              }
            }
            image {
              image {
                data {
                  attributes {
                    url
                  }
                }
              }
            }
            image2 {
              image {
                data {
                  attributes {
                    url
                  }
                }
              }
            }
          }
          silderproduct {
            title
            link
            navbar {
              title
              link
              type
            }
            sellerbutton {
              title
              link
              color
            }
            cards {
              title
              content
              prize
              link
              color
            }
            cardimage {
              image {
                data {
                  attributes {
                    url
                  }
                }
              }
            }
          }
          feedback {
            title
            cardItems {
              brandlogo {
                data {
                  attributes {
                    url
                  }
                }
              }
            }
            heading
            button {
              title
              link
              color
              isnew
              type
            }
            colors
          }
          footer {
            ... on ComponentFooterLeftContent {
              description
              colors
              title
            }
            ... on ComponentFooterFooterCatlogue {
              title
              colors
              items {
                content
                link
              }
            }
          }
          bottom {
            content
            button {
              title
              link
            }
            colors
            image {
              data {
                attributes {
                  url
                }
              }
            }
          }
        }
      }
    }
  }
`;

export const GET_PRODUCT_HEADER = gql`
  query GetHeaders {
    productheaders {
      data {
        attributes {
          categories {
            title
          }
          header {
            title
            breadcrum {
              title
              link
            }
          }
        }
      }
    }
  }
`;

export const GET_ID_PRODUCT = gql`
  fragment Productinterface on Product {
    slug
    rightdetail {
      image {
        data {
          attributes {
            url
          }
        }
      }
      content
      sideimage {
        image {
          data {
            attributes {
              url
            }
          }
        }
      }
    }
    leftdetail {
      detail {
        content1
        content2
      }
      name
      image {
        data {
          attributes {
            url
          }
        }
      }
      list {
        content1
        content2
      }
      multiplesize {
        size
        color
      }
      taxname
      prize1
      prize2
      buy {
        title
        link
        color
        isnew
        type
      }
    }
    description {
      links {
        link
      }
      description
      description1
      description2
      description3
      description4
      text
      color
    }
    title
    cards {
      text
      subimage {
        data {
          attributes {
            url
          }
        }
      }
      image {
        data {
          attributes {
            url
          }
        }
      }
      cardbutton {
        title
        link
        color
        isnew
        type
      }
      content
      color
      prize1
      prize2
    }
  }
  query GetProduct($id: ID!) {
    product(id: $id) {
      data {
        id
        attributes {
          ...Productinterface
        }
      }
    }
  }
`;
