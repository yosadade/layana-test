import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {colors} from '../../../utils/colors';
import {fonts} from '../../../utils/fonts';

const CardAbout = () => {
  const [showFullText, setShowFullText] = useState(false);

  const MAX_CHARACTERS = 294;

  const sliceText = text => {
    if (text.length <= MAX_CHARACTERS || showFullText) {
      return text;
    }

    return `${text.slice(0, MAX_CHARACTERS)}...`;
  };

  const titleContent =
    'This November, witness Max, Barry and a host of your regular Football Weekly favourites across the UK and Ireland. \n\n Each show will feature the podcast’s unique take on the world of football - plus, audience interaction, special guests and stories the lawyers don’t let us tell on the podcast.\n\n Last year’s tour featured Mark Langdon’s Meat Raffle, Barry Glendenning’s rendition of Call Me Maybe and Steve Claridge eating industrial quantities of fruit in his parent’s kitchen. This time around we promise, per show, at least 2 original, never seen before ideas and 5 anecdotes you’ve all heard before. A little more about the hosts: Max Rushden Despite moving to Australia, Max has been able to seamlessly continue hosting duties of Football Weekly with only a minor drop off in quality. \n\n He repeatedly assures bosses at the Guardian that his references will remain UK-centric so expect no mention of Stan Laziridis, Skippy or fairy bread. Barry Glendenning Death, taxes and Barry telling an all-too-revealing story on a Football Weekly live show. These are the only guarantees in life. He lives in a state of constant irritation that Max stereotypes him as the pod ‘clown’ who no-one takes seriously. \n\nBarry cannot wait for this live tour, despite rejecting every idea proposed for it so far. J oining Max and Barry on stage, will be Troy Townsend and Philippe Auclair. You can join this event in-person at Troxy, London or in a host of other cities or via a livestream. You can find details about the other events here. Alongside your ticket, you can also purchase The Football Weekly Book and some special Football Weekly merchandise.';

  const onHandleReadmore = () => {
    setShowFullText(!showFullText);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>About This Event</Text>
      <Text style={styles.titleContent}>{sliceText(titleContent)}</Text>
      <TouchableOpacity activeOpacity={0.7} onPress={onHandleReadmore}>
        <Text style={styles.titleRead}>
          {showFullText ? 'Read less' : 'Read more'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default CardAbout;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.blue2,
    width: '100%',
    padding: 16,
    borderRadius: 16,
  },
  title: {
    fontSize: 16,
    marginBottom: 4,
    fontFamily: fonts.primary[600],
    color: colors.blue,
  },
  titleContent: {
    fontSize: 14,
    marginBottom: 4,
    fontFamily: fonts.primary[400],
    color: colors.grey3,
  },
  titleRead: {
    fontSize: 14,
    marginBottom: 4,
    textDecorationLine: 'underline',
    fontFamily: fonts.primary.normal,
    color: colors.blue,
  },
});
