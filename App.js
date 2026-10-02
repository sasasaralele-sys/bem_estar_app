import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  StatusBar
} from 'react-native';


const CardConteudo = ({ titulo, explicacao, dicas, estudos }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.cardTitulo}>{titulo}</Text>
      <Text style={styles.cardExplicacao}>{explicacao}</Text>

      <View style={styles.secaoEstudos}>
        <Text style={styles.subtituloEstudos}>✦ O que dizem os estudos:</Text>
        {estudos.map((item, index) => (
          <Text key={index} style={styles.textoEstudo}>
            • {item}
          </Text>
        ))}
      </View>

      <Text style={styles.subtituloDicas}>✦ Dicas e Exemplos:</Text>
      {dicas.map((item, index) => (
        <View key={index} style={styles.itemDica}>
          <Text style={styles.marcador}>☘</Text>
          <Text style={styles.textoDica}>{item}</Text>
        </View>
      ))}
    </View>
  );
};


export default function App() {

  const dadosTemas = {
    alimentacao: {
      titulo: 'Alimentação Equilibrada',
      explicacao:
        'Uma alimentação saudável e variada fornece os nutrientes essenciais para o bom funcionamento do organismo, promovendo mais energia, imunidade e qualidade de vida.',
      estudos: [
        'Pesquisas em nutrição comprovam que uma dieta rica em alimentos variados e naturais reduz em até 30% o risco de doenças crônicas.',
        'Segundo a OMS (Organização Mundial da Saúde), o consumo adequado de vegetais diários melhora significativamente a saúde intestinal e o bem-estar mental.',
      ],
      dicas: [
        'Priorize alimentos in natura e minimamente processados',
        'Monte pratos coloridos com legumes, verduras e frutas variadas',
        'Mantenha horários regulares para realizar as refeições',
        'Reduza o consumo exagerado de açúcares, sal e ultraprocessados',
      ],
    },
    hidratacao: {
      titulo: 'Hidratação Diária',
      explicacao:
        'A água desempenha papel fundamental na regulação da temperatura corporal, digestão, transporte de nutrientes e eliminação de resíduos.',
      estudos: [
        'Estudos médicos apontam que a desidratação leve (apenas 1 a 2% de perda de água no corpo) já reduz a concentração mental, a memória recente e aumenta o cansaço.',
        'Pesquisas mostram que beber água antes das refeições auxilia no processo digestivo e na regulação natural da saciedade.',
      ],
      dicas: [
        'Beba água regularmente, sem esperar sentir sede intensa',
        'Tenha sempre uma garrafa de água por perto no estudo ou trabalho',
        'Consuma frutas ricas em água, como melancia, abacaxi e laranja',
        'Observe a cor da urina (o ideal é que esteja clara e transparente)',
      ],
    },
    exercicios: {
      titulo: 'Exercícios Diários',
      explicacao:
        'Manter-se fisicamente ativo contribui para a saúde cardiovascular, fortalecimento muscular, controle do estresse e bem-estar geral.',
      estudos: [
        'Estudos neurológicos comprovam que apenas 15 a 20 minutos diários de caminhada estimulam a liberação de endorfina e dopamina, combatendo sintomas de ansiedade.',
        'Análises de saúde pública indicam que pequenos hábitos diários de movimento previnem dores articulares e melhoram a circulação sanguínea.',
      ],
      dicas: [
        'Caminhadas leves ou moderadas ao ar livre',
        'Alongamentos no início e ao final do dia',
        'Passeio de bicicleta',
        'Exercícios leves',
      ],
    },
    sono: {
      titulo: 'Sono e Descanso',
      explicacao:
        'Um sono de qualidade é indispensável para a recuperação física e mental, consolidação da memória e regulação do humor e metabolismo.',
      estudos: [
        'Estudos do sono mostram que dormir cerca de 7 a 8 horas por noite fortalece diretamente a imunidade e reorganiza as conexões neurais.',
        'Pesquisas comprovam que a luz azul dos eletrônicos bloqueia a produção de melatonina, o hormônio natural que induz ao descanso profundo.',
      ],
      dicas: [
        'Mantenha horários regulares para dormir e acordar',
        'Evite telas (celular, TV, computador) antes de se deitar',
        'Crie um ambiente escuro, silencioso e confortável',
        'Pratique atividades relaxantes à noite, como leitura leve',
      ],
    },
  };

  const [temaSelecionado, setTemaSelecionado] = useState('alimentacao');

  const selecionarTema = (chaveTema) => {
    setTemaSelecionado(chaveTema);
  };

  const temaAtual = dadosTemas[temaSelecionado];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#1e2d24" />

      <View style={styles.conteudoCentralizado}>
        <Text style={styles.tituloApp}> SAÚDE E BEM-ESTAR </Text>

        <View style={styles.containerBotoes}>
          <TouchableOpacity
            style={[
              styles.botao,
              temaSelecionado === 'alimentacao' && styles.botaoAtivo,
            ]}
            onPress={() => selecionarTema('alimentacao')}
          >
            <Text
              style={[
                styles.textoBotao,
                temaSelecionado === 'alimentacao' && styles.textoBotaoAtivo,
              ]}
            >
              Alimentação
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.botao,
              temaSelecionado === 'hidratacao' && styles.botaoAtivo,
            ]}
            onPress={() => selecionarTema('hidratacao')}
          >
            <Text
              style={[
                styles.textoBotao,
                temaSelecionado === 'hidratacao' && styles.textoBotaoAtivo,
              ]}
            >
              Hidratação
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.botao,
              temaSelecionado === 'exercicios' && styles.botaoAtivo,
            ]}
            onPress={() => selecionarTema('exercicios')}
          >
            <Text
              style={[
                styles.textoBotao,
                temaSelecionado === 'exercicios' && styles.textoBotaoAtivo,
              ]}
            >
              Exercícios
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.botao,
              temaSelecionado === 'sono' && styles.botaoAtivo,
            ]}
            onPress={() => selecionarTema('sono')}
          >
            <Text
              style={[
                styles.textoBotao,
                temaSelecionado === 'sono' && styles.textoBotaoAtivo,
              ]}
            >
              Sono
            </Text>
          </TouchableOpacity>
        </View>

        <ScrollView
          contentContainerStyle={styles.scrollArea}
          showsVerticalScrollIndicator={false}
        >
          <CardConteudo
            titulo={temaAtual.titulo}
            explicacao={temaAtual.explicacao}
            estudos={temaAtual.estudos}
            dicas={temaAtual.dicas}
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#233329', 
    alignItems: 'center', 
  },
  conteudoCentralizado: {
    flex: 1,
    width: '100%',
    maxWidth: 520, 
    paddingTop: 30,
  },
  tituloApp: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#e2d4be', 
    marginVertical: 15,
    letterSpacing: 1.5,
  },
  containerBotoes: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  botao: {
    backgroundColor: '#354a3c',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 20,
    margin: 4,
    borderWidth: 1,
    borderColor: '#526e5a',
  },
  botaoAtivo: {
    backgroundColor: '#8c5a3c', 
    borderColor: '#d2a078',
  },
  textoBotao: {
    fontSize: 14,
    fontWeight: '600',
    color: '#c0cdb8',
  },
  textoBotaoAtivo: {
    color: '#fffbf5',
  },
  scrollArea: {
    paddingHorizontal: 16,
    paddingBottom: 30,
    alignItems: 'center',
  },
  card: {
    backgroundColor: '#1b261f', 
    borderRadius: 16,
    padding: 22,
    width: '100%',
    borderWidth: 1,
    borderColor: '#435e4b',
  },
  cardTitulo: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#d2a078',
    marginBottom: 12,
    textAlign: 'center',
    letterSpacing: 1,
  },
  cardExplicacao: {
    fontSize: 15,
    color: '#d8e2d5',
    lineHeight: 22,
    marginBottom: 16,
    textAlign: 'justify',
  },
  secaoEstudos: {
    backgroundColor: '#27382d',
    padding: 14,
    borderRadius: 10,
    marginBottom: 18,
    borderLeftWidth: 3,
    borderLeftColor: '#9b76aa', 
  },
  subtituloEstudos: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#d4b3e2', 
    marginBottom: 8,
  },
  textoEstudo: {
    fontSize: 13,
    color: '#c9dac5',
    lineHeight: 19,
    marginBottom: 6,
    fontStyle: 'italic',
  },
  subtituloDicas: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#d2a078',
    marginBottom: 10,
  },
  itemDica: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  marcador: {
    fontSize: 14,
    color: '#8cb896',
    marginRight: 8,
  },
  textoDica: {
    fontSize: 14,
    color: '#d8e2d5',
    flex: 1,
    lineHeight: 20,
  },
});