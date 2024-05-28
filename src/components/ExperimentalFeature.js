import PropTypes from 'prop-types';
import React from 'react';
import RelativeLink from './RelativeLink';
import {Box, Center, Flex, Text, chakra} from '@chakra-ui/react';
import {FlaskIcon} from './Icons';

import {MarkdownInAdmonitions} from './MarkdownInAdmonitions';

export const ExperimentalFeature = ({
  discordLink,
  appendText = '',
  children
}) => {
  return (
    <Box
      pl="2"
      py="1"
      borderLeftWidth="2px"
      borderColor="primary"
      sx={{
        '>': {
          ':not(a):not(:last-child)': {
            mb: 2
          }
        }
      }}
    >
      <Flex as="span">
        <chakra.span pl="10px" pr="10px">
          <Center h="100%">
            <FlaskIcon />
          </Center>
        </chakra.span>
        <Text pl="1">
          {children ? (
            children
          ) : (
            <>
              This feature is{' '}
              <RelativeLink
                color={'tertiary'}
                href="https://www.apollographql.com/docs/resources/product-launch-stages#experimental-features"
              >
                experimental
              </RelativeLink>
              . Your questions and feedback are highly valued{'—'}don&apos;t
              hesitate to get in touch with your Apollo contact
              {discordLink && (
                <>
                  or on the official
                  <RelativeLink color={'tertiary'} href={discordLink}>
                    {' '}
                    Apollo GraphQL Discord
                  </RelativeLink>
                </>
              )}
              .{' '}
              {appendText.length > 0 && (
                <MarkdownInAdmonitions>{appendText}</MarkdownInAdmonitions>
              )}
            </>
          )}
        </Text>
      </Flex>
    </Box>
  );
};

ExperimentalFeature.propTypes = {
  discordLink: PropTypes.string,
  appendText: PropTypes.node,
  children: PropTypes.node
};
