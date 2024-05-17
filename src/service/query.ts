import { gql } from "@apollo/client";

export const QUERY = gql`
query GetHomes{
  homes{
    data{
      attributes{
        header{
          title
          logo{
            data{
              attributes{
                url
              }
            }
          }
          headerbutton{
            title
            link
            color
            isnew
            type
          }
        }
        navbar{
          title
          link
          type
        }
        topmain{
          title
          link
          image{
            data{
              attributes{
                url
              }
            }
          }
          frame1{
            data{
              attributes{
                url
              }
            }
          }
          colors
          description
          topbutton{
            title
            link
            color
            isnew
            type
          }
          frame2{
            data{
              attributes{
                url
              }
            }
          }
        }
        brands{
          brandlogo{
            data{
              attributes{
                url
              }
            }
          }
          productname
          productcount
          colors
        }
        categorey{
          title
          images{
            brandlogo{
              data{
                attributes{
                  url
                }
              }
            }
            productname
            productcount
            colors
          }
        }
        productitems{
           title
           link
           navbar{
            title
            link
          }
        }
        filterbutton{
          title
          link
          color
          type
          isnew
        }
        Cards{
          title
          content
          prize
          link
          color
          cargdimage{
            image{
              data{
                attributes{
                  url
                }
              }
            }
          }
        }
        brandbanner{
          description
          button{
            title
            link
            color
            isnew
            type
          }
          backgroundimage{
            image{
              data{
                attributes{
                  url
                }
              }
            }
          }
          image{
            image{
              data{
                attributes{
                  url
                }
              }
            }
          }
          image2{
            image{
              data{
                attributes{
                  url
                }
              }
            }
          }
        }
        silderproduct{
          title
          link
          navbar{
            title
            link
            type
          }
        }
        filterbutton1{
          title
          link
          color
          type
          isnew
        }
        Cards1{
          title
          content
          prize
          link
          color
          cargdimage{
            image{
              data{
                attributes{
                  url
                }
              }
            }
          }
        }
        feedback{
          title
          cardItems{
            brandlogo{
              data{
                attributes{
                  url
                }
              }
            }
            productname
            productcount
            colors
          }
          heading
          button{
            title
            link
            color
            isnew
            type
          }
          colors
        }
        footer{
          ... on ComponentFooterLeftContent{
            description
            colors
            title
          }
          ...on ComponentFooterFooterCatlogue{
            title
            colors
            items{
              content
              link
            }
          }
        }
        bottom{
          content
          button{
            title
            link
          }
          colors
          image{
            data{
              attributes{
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
export const GET_PRODUCT = gql`
  query GetProduct($slug: String!) {
    products(slug: $slug) {
      data {
        id
        attributes {
          nav
          breadcrum {
            title
            links {
              link
            }
          }
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
          slug
        }
      }
    }
  }
`;