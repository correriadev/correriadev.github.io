import React from 'react';
import { StyleSheet, View, ViewProps, useWindowDimensions } from 'react-native';
import { BREAKPOINTS, MAX_WIDTH, SECTION_MARGIN_PERCENT } from './designSystem';

interface CenteredSectionProps extends ViewProps {
  children: React.ReactNode;
}

export default function CenteredSection({ children, style, ...props }: CenteredSectionProps) {
  const { width } = useWindowDimensions();
  const isMediumOrAbove = width >= BREAKPOINTS.md;
  let sectionStyle = [styles.section, style];
  if (isMediumOrAbove) {
    const margin = width * SECTION_MARGIN_PERCENT;
    const contentWidth = width * (1 - 2 * SECTION_MARGIN_PERCENT);
    sectionStyle = [
      styles.section,
      {
        marginLeft: margin,
        marginRight: margin,
        width: contentWidth,
        maxWidth: MAX_WIDTH,
        alignSelf: 'center' as const,
      },
      style,
    ];
  }
  return (
    <View style={sectionStyle} {...props}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  section: {
    width: '100%',
  },
}); 