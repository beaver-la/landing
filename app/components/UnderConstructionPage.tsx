export default function UnderConstructionPage() {
    return (
      <div className="min-h-screen bg-white py-24" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '90vh', backgroundColor: '#003D3A', color: '#F0F4F7', textAlign: 'center' }}>
        <img src="header-image.png" alt="Logo de la empresa" style={{ width: '250px'}} />
        <div style={{ display: 'inline-flex', marginTop: '10px' }}>
            <span style={{ fontSize: '2em', margin: 0, marginRight: '10px', marginLeft: '10px', marginTop: 'auto', marginBottom: 'auto' }}>🚧</span>
            <h1 style={{ margin: '0px', fontSize: '38px', fontWeight: 'bold' }}>Under Construction</h1>
            <span style={{ fontSize: '2em', margin: 0, marginRight: '10px', marginLeft: '10px', marginTop: 'auto', marginBottom: 'auto' }}>🚧</span>
        </div>
        <div style={{ display: 'inline-flex', marginTop: '10px' }}>
            <p style={{ margin: '0px' }}>Estamos trabajando en algo increíble. ¡Volvé pronto para verlo en acción!</p>
        </div>
      </div>
    )
  }
  
  