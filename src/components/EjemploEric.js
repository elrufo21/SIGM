const ErdenForm = ({
  token,
  reset,
  readOnly = false,
  fields,
  defaultData = null,
  onSubmit = (data) => console.log(data),
}) => {
  //Asignacion de referencias a los inputs
  const [data, setData] = useState(
    defaultData ??
      fields.reduce((acc, field) => {
        acc[field.name] = field.value ?? "";
        return acc;
      }, {})
  );

  useEffect(() => {
    setData(
      defaultData ??
        fields.reduce((acc, field) => {
          acc[field.name] = field.value ?? "";
          return acc;
        }, {})
    );
  }, [reset]);

  //Manejador de carga

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (data) => {
    setLoading(true);
    await onSubmit.fun(data);
    setLoading(false);
  };

  //
  //
  //
  //VISULA/
  //
  //
  //
  const scrollViewRef = useRef(null);

  const Inputs = {
    select: ErdenInputSelectable,
    description: ErdenInputTextArea,
    img: ErdenInputImage,
    default: ErdenInputText,
  };

  const handleScrollToIndex = (index) => {
    if (scrollViewRef.current) {
      const yOffset = index * 100; // Adjust this value based on your item height or use dynamic calculation
      scrollViewRef.current.scrollTo({ y: yOffset, animated: true });
    }
  };
  return (
    <>
      <ScrollView ref={scrollViewRef} style={erdenStyles.paddingH[0]}>
        {fields.map((item, index) => {
          const RenderInput = Inputs[item.type] ?? Inputs.default;
          return (
            <ErdenView gap paddingV key={index}>
              <ErdenView paddingH>
                <ErdenText color="secondary" bold>
                  {item.label}
                </ErdenText>
              </ErdenView>
              <RenderInput
                url={
                  item.type === "img" &&
                  defaultData &&
                  item.url + defaultData.id
                }
                token={token}
                readOnly={readOnly}
                placeholder={item.placeholder}
                onFocus={() => handleScrollToIndex(index)}
                type={item.type}
                value={data[item.name]}
                onChange={(text) =>
                  setData((prevData) => ({ ...prevData, [item.name]: text }))
                }
                options={item.options}
                title={item.label}
              />
            </ErdenView>
          );
        })}
      </ScrollView>
      <ErdenView padding shadow color background>
        <ErdenButton
          disabled={loading}
          title={loading ? "Cargando" : onSubmit.title ?? "Enviar"}
          color={loading ? "secondary" : "primary"}
          onPress={() => handleSubmit(data)}
        />
      </ErdenView>
    </>
  );
};
