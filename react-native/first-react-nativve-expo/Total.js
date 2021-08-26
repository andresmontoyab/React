import React, { useEffect, useState } from 'react'
import { Button, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native'
import { BarChart } from 'react-native-chart-kit'

const Total = () => {
    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState('');
    const [total, setTotal] = useState(0);
    const [gigs, setGigs] = useState([
        {
            description: 'Freelance',
            amount: 10000
        }
    ]);

    useEffect(() => {
        const totalIncome = gigs.reduce((total, gig) =>  total + Number(gig.amount), 0)
        setTotal(totalIncome)
    }, [gigs])

    const addGig = () => {
        setGigs([...gigs, {
            description: description,
            amount: amount
        }])
        setDescription('')
        setAmount('')
    }
    return (
        <SafeAreaView>
            <View>
                <Text >Basic React App</Text>
            </View>
            <Text>Total Income: {total}</Text>
            <TextInput
                style={styles.button}
                value={description}
                placeholder='Enter the description'
                onChangeText={text => setDescription(text)}
            />
            <TextInput
                style={styles.button}
                value={amount}
                placeholder='Enter the amount'
                keyboardType='numeric'
                onChangeText={text => setAmount(text)}
            />
            <Button disabled={!amount && !description} onPress={addGig} title='Add Gig'/>
            {gigs.map(gig => (
                <View>
                    <Text>{gig.description}</Text>
                    <Text>$ {gig.amount}</Text>
                </View>
            ))}
        </SafeAreaView>
        
    )
}

export default Total

const styles = StyleSheet.create({
    button: {
        marginBottom: 10,
        marginTop: 10,
        height: 40,
        borderColor: 'lightgrey',
        borderWidth: 1,
        margin: 10,
        borderRadius: 10,
    }
})
