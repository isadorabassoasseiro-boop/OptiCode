function ContatoForm({label,type,id,name,placeholder,textarea}) {

  return (
    <div className="flex flex-col gap-1.5 lg:gap-2">

      <label htmlFor={id} className="text-xs font-bold text-white lg:text-sm">
        {label}
      </label>

      {textarea ? (
        <textarea
          id={id}
          name={name}
          rows="4"
          placeholder={placeholder}
          required
          className="w-full resize-y rounded-md border border-neutral-700 bg-neutral-800/60 px-3 py-2 text-xs lg:rounded-lg lg:px-3.5 lg:py-2.5 lg:text-sm text-white outline-none transition-colors duration-300 placeholder:text-neutral-400 focus:border-azure"
        ></textarea>
      ) : (
        <input
          type={type}
          id={id}
          name={name}
          placeholder={placeholder}
          required
          className="w-full rounded-md border border-neutral-700 bg-neutral-800/60 px-3 py-2 text-xs lg:rounded-lg lg:px-3.5 lg:py-2.5 lg:text-sm text-white outline-none transition-colors duration-300 placeholder:text-neutral-400 focus:border-azure"
        />
      )}

    </div>
  )
}

export default ContatoForm;
