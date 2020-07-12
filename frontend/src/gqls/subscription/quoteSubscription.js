import gql from "graphql-tag";

const QUOTES_SUBSCRIPTION = gql`
  subscription onRandomQuote($minimumLength: Int!) {
    randomQuote(minimumLength: $minimumLength){
      text
      author
    }
}`;

export { QUOTES_SUBSCRIPTION };
