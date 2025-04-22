import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import SearchBar from '../atoms/SearchBar';
import SearchResultItem from '../molecules/SearchResultItem';
import Text from '../atoms/Text';
import {mockData} from '../../data/mock';
import {ProductData} from '../../data/mock/products';

// Replace dynamic generation with the specified hardcoded list
const trendingSearches = ['air', 'coat', 'dress'];

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [results, setResults] = useState<ProductData[]>([]);
  const navigation = useNavigation<any>();

  // Perform search when query changes
  useEffect(() => {
    if (searchQuery.trim()) {
      const searchResults = mockData.search.searchProducts(searchQuery);
      setResults(searchResults);
    } else {
      setResults([]);
    }
  }, [searchQuery]);

  const handleClearSearch = () => {
    setSearchQuery('');
    setResults([]);
  };

  const handleProductPress = (productId: string) => {
    navigation.navigate('ProductDetail', {productId});
  };

  // Handle clicking a trending search term
  const handleTrendingSearchPress = (term: string) => {
    setSearchQuery(term);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      <SearchBar
        value={searchQuery}
        onChangeText={setSearchQuery}
        onClear={handleClearSearch}
        placeholder="Search products..."
      />

      {/* Trending Searches Section - Show only when query is empty */}
      {!searchQuery.trim() && (
        <View style={styles.trendingContainer}>
          <Text style={styles.trendingTitle}>Trending Searches</Text>
          <View style={styles.trendingList}>
            {trendingSearches.map((term, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => handleTrendingSearchPress(term)}
                style={styles.trendingItemContainer}>
                <Text style={styles.trendingItemText}>{term}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      )}

      {/* Search Results Section - Show only when there is a query */}
      {searchQuery.trim() && (
        <FlatList
          data={results}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <SearchResultItem
              id={item.id}
              title={item.title}
              price={item.price}
              image={item.image}
              onPress={() => handleProductPress(item.id)}
            />
          )}
          contentContainerStyle={styles.resultsList}
          ListEmptyComponent={
            <View style={styles.emptyContainer}>
              <Text style={styles.emptyText}>
                No results found for "{searchQuery}"
              </Text>
            </View>
          }
          style={!searchQuery.trim() ? {display: 'none'} : {}}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  trendingContainer: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 8,
  },
  trendingTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#333',
  },
  trendingList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  trendingItemContainer: {
    backgroundColor: '#F2F2F7',
    borderRadius: 15,
    paddingVertical: 6,
    paddingHorizontal: 12,
    marginRight: 8,
    marginBottom: 8,
  },
  trendingItemText: {
    fontSize: 14,
    color: '#555',
  },
  resultsList: {
    flexGrow: 1,
  },
  emptyContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    marginTop: 50,
  },
  emptyText: {
    fontSize: 16,
    color: '#8E8E93',
    textAlign: 'center',
  },
});

export default Search;
