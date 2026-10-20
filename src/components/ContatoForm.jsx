function ContatoForm({label,type,id,name,placeholder,textarea}) {

  return (
    <div className="flex flex-col gap-2">

      <label htmlFor={id} className="text-sm font-semibold text-white">
        {label}
      </label>

      {textarea ? (
        <textarea
          id={id}
          name={name}
          rows="5"
          placeholder={placeholder}
          required
          className="w-full resize-y rounded-lg border border-neutral-700 bg-neutral-800/60 px-4 py-3 text-sm text-white outline-none transition-colors duration-300 placeholder:text-neutral-400 focus:border-azure"
        ></textarea>
      ) : (
        <input
          type={type}
          id={id}
          name={name}
          placeholder={placeholder}
          required
          className="w-full rounded-lg border border-neutral-700 bg-neutral-800/60 px-4 py-3 text-sm text-white outline-none transition-colors duration-300 placeholder:text-neutral-400 focus:border-azure"
        />
      )}

    </div>
  )
}

export default ContatoForm;
