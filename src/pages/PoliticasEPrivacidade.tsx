import { Helmet, HelmetProvider } from "react-helmet-async";

export default function PoliticaEPrivacidade() {
  return (
    <HelmetProvider>
      <main className="min-h-screen bg-white text-gray-800 pt-24 px-6 pb-12 max-w-4xl mx-auto">
        <Helmet>
          <title>Política de Privacidade e Termos de Uso | The Brothers</title>
          <meta
            name="description"
            content="Política de privacidade da hamburgueria The Brothers. Entenda como tratamos dados pessoais, como nome ou telefone, e o uso das informações para atendimento e pedidos."
          />
          <link rel="canonical" href="https://seusite.com.br/politica" />
        </Helmet>

        <h1 className="text-3xl font-bold mb-6 text-center">
          Política de Privacidade e Termos de Uso
        </h1>

        <section className="space-y-4 text-justify">
          <h2 className="text-xl font-semibold mt-6">1. Coleta de Dados</h2>
          <p>
            Ao utilizar nosso site, podemos coletar apenas **informações básicas
            de contato**, como <strong>nome</strong> e <strong>número de telefone</strong>.
            Esses dados são fornecidos voluntariamente pelo usuário quando entra
            em contato conosco ou quando utiliza links externos para atendimento.
          </p>
          <p>
            **Nenhuma outra informação pessoal é coletada**, e não utilizamos
            formulários complexos, cadastros ou coleta automática de dados sensíveis.
          </p>

          <h2 className="text-xl font-semibold mt-6">2. Uso das Informações</h2>
          <p>
            As informações são utilizadas exclusivamente para:
          </p>
          <ul className="list-disc ml-6">
            <li>Entrar em contato com o cliente;</li>
            <li>Responder dúvidas;</li>
            <li>Auxiliar em pedidos realizados via WhatsApp ou plataformas de delivery.</li>
          </ul>
          <p>
            <strong>Não compartilhamos dados com terceiros</strong>, exceto quando o próprio
            usuário escolhe acessar serviços externos como iFood ou 99Food.
          </p>

          <h2 className="text-xl font-semibold mt-6">3. Pedidos e Links de Terceiros</h2>
          <p>
            Nosso site pode exibir links para plataformas de delivery, como
            <strong> iFood</strong> e <strong>99Food</strong>. Ao clicar nesses links, o usuário é
            direcionado para um ambiente externo, onde poderá realizar o pedido.
          </p>
          <p>
            Informamos que **não processamos nenhum pagamento em nosso site**.
            Todos os pedidos e pagamentos são feitos diretamente nas plataformas
            oficiais ou pelo nosso WhatsApp comercial.
          </p>

          <h2 className="text-xl font-semibold mt-6">4. Cookies</h2>
          <p>
            Utilizamos cookies apenas para melhorar a navegação do usuário e
            compreender dados básicos de acesso, sem identificar indivíduos.
            O usuário pode desativá-los no próprio navegador, se desejar.
          </p>

          <h2 className="text-xl font-semibold mt-6">5. Direitos do Usuário</h2>
          <p>
            De acordo com a LGPD, você pode solicitar a exclusão ou atualização
            das informações fornecidas (nome ou telefone). Para isso, basta entrar
            em contato conosco pelo WhatsApp.
          </p>

          <h2 className="text-xl font-semibold mt-6">6. Termos de Uso</h2>
          <p>
            Todo o conteúdo do site, incluindo imagens, textos e marca registrada,
            pertence à hamburgueria The Brothers. É proibida a reprodução sem
            autorização.
          </p>

          <h2 className="text-xl font-semibold mt-6">7. Alterações na Política</h2>
          <p>
            Esta política poderá ser atualizada a qualquer momento para estar em
            conformidade com a legislação vigente ou melhorias no funcionamento
            do site. Recomendamos revisão periódica.
          </p>

          <p className="text-sm text-center mt-8 text-gray-500">
            Última atualização: Dezembro de 2025
          </p>
        </section>
      </main>
    </HelmetProvider>
  );
}
