import { Text, View, TextInput, Button, FlatList, StyleSheet } from 'react-native';



const Message = ({ fromUser, content }) => (

  <View style={style.message}>
      <Text style={style.username}>{fromUser}</Text>
      <Text style={style.content}>{content}</Text>
  </View>
);



const DATA = [
  {
    "id": 1,
    "fromUser": "user1 (me)",
    "toUser": "user2",
    "content": "Salut, ça va ?"
  },
  {
    "id": 2,
    "fromUser": "user2",
    "toUser": "user1",
    "content": "Oui et toi ?"
  },
  {
    "id": 3,
    "fromUser": "user1 (me)",
    "toUser": "user2",
    "content": "Oui, rendez-vous à 20h."
  },
  {
    "id": 4,
    "fromUser": "user2",
    "toUser": "user1",
    "content": "D'accord, à ce soir."
  }
];





export default function App() {

  return (

    <View style={style.container}>

        <View style={style.header}>
          <View style={style.profile}></View>
          <View>
            <Text style={style.text}>User2</Text>
          </View>
        </View>



      <View style={style.page}>

        <View style={style.messagesContainer}>
            <FlatList
              data={DATA}
              renderItem={({item}) => (
              <Message
                  fromUser={item.fromUser}
                  content={item.content}
              />
              )}
            />
        </View>

        <View style={style.inputborder}>
          <TextInput style={style.input} />
          <Button style={style.button} title='Envoyer' />
        </View>

      </View>

    </View>

  );
}





const style = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },

  header: {
    flex: 1,
    backgroundColor: '#ffffff',
    maxHeight: 80,
    marginTop: 30,
    paddingHorizontal: 30,
    paddingVertical: 10,
  },
  profile: {
    backgroundColor: '#D6D6D6',
    minHeight: 40,
    maxWidth: 40,
    borderRadius: 50,
  },

  page: {
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10,
    padding: 5,
  },
  message: {
    flex: 1,
    marginBottom: 5
  },
  username: {
    flex: 1,
    marginVertical: 5,
  },
  content: {
    flex: 1,
    padding: 5,
    borderWidth: 1,
    borderRadius: 5,
  },
  messagesContainer: {
    borderTopWidth: 1,
    borderColor: '#D6D6D6',
    paddingTop:10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#000000',
    minHeight: 50,
    marginBottom: 10,
    borderRadius: 5,
  },
  inputborder: {
    borderTopWidth: 1,
    borderColor: '#D6D6D6',
    paddingVertical: 10,
  },


});
