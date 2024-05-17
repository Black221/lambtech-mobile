import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Text, FlatList} from 'react-native';


type CategorieProps = {
    active: boolean,
    children?: string,
    resetActive(key:number):void,
    id:number
}

/* CAS CONTEXT */
export type ReactChildren = React.ReactNode
    | React.ReactElement
    | React.ReactNode[]
    | React.ReactElement[]

type CategoriesProps = {
    children?: ReactChildren,
}


export const Categorie: React.FC<CategorieProps> = ({ active, children, resetActive , id}) => {

    const [actived, setActived] = useState(active);

    useEffect(() => {
        setActived(active)
    }, [active]);

    return (
        actived ? (
                <View key={id} style={styles.squareActive} onTouchStart={() => resetActive(id)}>
                    <Text style={styles.textActive}>{children}</Text>
                </View>
            ) :
            (
                <View key={id} style={styles.square}  onTouchStart={() => resetActive(id)}>
                    <Text style={styles.text}>{children}</Text>
                </View>
            )
    )
}

const categories: any = [
    {children: "short"},
    {children: "medium"},
    {children: "laaaarge"},
    {children: "extraaa laaaarge"},
    {children: "extraaa extraaa laaaarge"},
]


export const Categories: React.FC<CategoriesProps> = ({children}) => {

    const [ active, setActive ] = useState([false, false, false, false, false, false]);

    const resetActive = (key:number): void => {
        setActive(active => active.map( (a, id) => id === key));
    }

    return(
        <FlatList
            data={categories}
            renderItem={
                ({item, index}) => (
                    <Categorie key={index} active={active[index]} resetActive={resetActive} id={index}>{item.children}</Categorie>
                )
            }
            // keyExtractor={(item, index) => index.toString()}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
        />
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    square: {
      backgroundColor: '#D9D9D9',
      justifyContent: 'center', // Centrez le texte horizontalement
      alignItems: 'center',
      padding: 8,
      paddingHorizontal: 20,
      margin: 10, // Ajoutez un espacement autour du carré
      borderRadius:16,
    },
    text: {
      fontSize: 16,
      color: 'black',
        fontWeight: "bold"
    },
    textActive:{
        fontSize: 16,
      color: 'white',
        fontWeight: "bold"

    },
    squareActive:{
        backgroundColor: '#6B4EFF',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 8,
        paddingHorizontal: 20,
        margin: 10,
        borderRadius:16,
    },
  });

export default Categories;