import React from 'react';
import {StyleSheet, View, StyleProp, ViewStyle} from 'react-native';
import Text from '../atoms/Text';
import {TouchableOpacity} from 'react-native';

interface SectionHeaderProps {
  title: string;
  actionLabel?: string;
  style?: StyleProp<ViewStyle>;
  onActionPress?: () => void;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  actionLabel = 'View All',
  style,
  onActionPress,
}) => {
  return (
    <View style={[styles.container, style]}>
      <Text variant="title" style={styles.title}>
        {title}
      </Text>
      {onActionPress && (
        <TouchableOpacity onPress={onActionPress}>
          <Text variant="caption" style={styles.actionLabel}>
            {actionLabel}
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  title: {
    fontWeight: '700',
  },
  actionLabel: {
    color: '#666',
  },
});

export default SectionHeader;
