
const produtos = [
  {
    nome: "Copo Élfico Lumina",
    preco: "12.90",
    imagem: "https://via.placeholder.com/150",
    id: "lumina"
  },
  {
    nome: "Caneca Gelo Arcano",
    preco: "14.90",
    imagem: "https://via.placeholder.com/150",
    id: "gelo"
  },
  {
    nome: "Taça Cristal Mística",
    preco: "18.50",
    imagem: "https://via.placeholder.com/150",
    id: "cristal"
  }
];

export default function App() {
  return (
    <div style={ padding: 40 }>
      <h1 style={ color: "#FFA500" }>Azzafy Horizon Creation</h1>
      <p style={ marginBottom: 30 }>Loja online de inovação criativa – dropshipping e além.</p>
      <div style={ display: "flex", gap: 30 }>
        {produtos.map(p => (
          <div key={p.id} style={ background: "#333", padding: 20, borderRadius: 8, width: 200 }>
            <img src={p.imagem} alt={p.nome} style={ width: "100%", borderRadius: 5 } />
            <h3 style={ color: "#FFA500" }>{p.nome}</h3>
            <p>{p.preco}€</p>
            <form action="https://www.paypal.com/donate" method="post" target="_blank">
              <input type="hidden" name="business" value="azzafyhorizoncreation@gmail.com" />
              <input type="hidden" name="item_name" value={p.nome} />
              <input type="hidden" name="currency_code" value="EUR" />
              <input type="hidden" name="amount" value={p.preco} />
              <input type="submit" value="Comprar com PayPal"
                     style={ background:"#FFA500", color:"#000", border:"none", padding:"10px", borderRadius:"5px", cursor:"pointer" }/>
            </form>
          </div>
        ))}
      </div>
    </div>
  );
}
