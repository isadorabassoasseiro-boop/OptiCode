function ContatoForm({label,type,id,name,placeholder,textarea}) {

  return (
    <div className="grupoForm">

      <label htmlFor={id}>
        {label}
      </label>

      {textarea ? (
        <textarea
          id={id}
          name={name}
          rows="5"
          placeholder={placeholder}
          required
        ></textarea>
      ) : (
        <input
          type={type}
          id={id}
          name={name}
          placeholder={placeholder}
          required
        />
      )}

    </div>
  )
}

export default ContatoForm;