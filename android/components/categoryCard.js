import React from 'react';

import {
    TouchableOpacity,
    View,
    Image,
    Text
} from 'react-native';

import styles from '../styles/styles';

const CategoryCard = ({ imgUrl, title }) =>{
    return(
        <TouchableOpacity style={styles.categoryItem}>
            <Image source={(imgUrl)} style={styles.categoryImg} />
            <Text style={styles.categoryText}>{ title }</Text>
        </TouchableOpacity>
    )
}

export default CategoryCard;
