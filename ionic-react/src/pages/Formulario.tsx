import {
  IonButton,
  IonContent,
  IonInput,
  IonInputPasswordToggle,
  IonItem,
  IonPage,
  IonSelect,
  IonSelectOption,
  IonText,
  IonToggle,
} from "@ionic/react";

import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import { passMatchValidator, rutValidator } from "../misc/validators";
import "./Formulario.css";

interface Region {
  nombre: string;
  valor: number;
  comunas: string[];
}

interface RegionesJSON {
  regiones: {
    [key: string]: Region;
  };
}

export interface FormularioInput {
  nombre: string;
  rut: string;
  email: string;
  password: string;
  passwordConfirm: string;
  region: string;
  comuna: string;
}

const Formulario: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormularioInput>({
    mode: "all",
    reValidateMode: "onChange",
  });

  const [regiones, setRegiones] = useState<RegionesJSON | null>(null);
  const [regSel, setRegSel] = useState<Region | null>(null);
  const [tycChecked, setTycChecked] = useState<boolean>(false);

  useEffect(() => {
    fetch("/regiones-comunas.json").then((res) => {
      res.json().then((data: RegionesJSON) => {
        setRegiones(data);
      });
    });
  }, []);

  const handleRegionChange = (e: CustomEvent) => {
    const region = regiones?.regiones[e.detail.value];
    if (region) {
      setRegSel(region);
    }
  };

  const submitFormulario: SubmitHandler<FormularioInput> = (data) => {
    console.log("Formulario enviado");
    console.table(data);
  };

  return (
    <IonPage>
      <IonContent className="ion-padding-vertical">
        <img src="src/imagenes/logo.jpg" className="logo-small" alt="Logo" />
        <h2>Crear cuenta</h2>
        <form onSubmit={handleSubmit(submitFormulario)}>
          <IonItem className="custom-item">
            <IonInput
              {...register("nombre", {
                required: "El nombre es requerido",
                minLength: {
                  value: 3,
                  message: "El nombre debe tener al menos 3 caracteres",
                },
                maxLength: {
                  value: 20,
                  message: "El nombre debe tener como máximo 20 caracteres",
                },
              })}
              className={`${errors.nombre ? "ion-invalid" : "ion-valid"}`}
              type="text"
              labelPlacement="stacked"
              placeholder="Nombre de usuario"
            />
          </IonItem>
          {errors.nombre && (
            <IonText className="error-text">{errors.nombre.message}</IonText>
          )}

          <IonItem className="custom-item">
            <IonInput
              type="text"
              labelPlacement="stacked"
              placeholder="RUT"
              {...register("rut", {
                validate: rutValidator,
              })}
            />
          </IonItem>
          {errors.rut && (
            <IonText className="error-text">{errors.rut.message}</IonText>
          )}

          <IonItem className="custom-item">
            <IonInput
              type="text"
              labelPlacement="stacked"
              placeholder="Email"
              {...register("email", {
                required: {
                  value: true,
                  message: "El email es requerido",
                },
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "El email no es válido",
                },
              })}
            />
          </IonItem>
          {errors.email && (
            <IonText className="error-text">{errors.email.message}</IonText>
          )}

          <IonItem className="custom-item">
            <IonInput
              type="password"
              labelPlacement="stacked"
              placeholder="Contraseña"
              {...register("password", {
                required: "La contraseña es requerida",
              })}
            >
              <IonInputPasswordToggle color="medium" slot="end" />
            </IonInput>
          </IonItem>
          {errors.password && (
            <IonText className="error-text">{errors.password.message}</IonText>
          )}

          <IonItem className="custom-item">
            <IonInput
              type="password"
              labelPlacement="stacked"
              placeholder="Confirmar contraseña"
              {...register("passwordConfirm", {
                required: "Debes confirmar tu contraseña",
                validate: passMatchValidator,
              })}
            >
              <IonInputPasswordToggle color="medium" slot="end" />
            </IonInput>
          </IonItem>
          {errors.passwordConfirm && (
            <IonText className="error-text">
              {errors.passwordConfirm.message}
            </IonText>
          )}

          <IonItem className="custom-item">
            <IonSelect
              interface="action-sheet"
              placeholder="Seleccione su región"
              onIonChange={handleRegionChange}
              {...register("region", {
                required: "La región es requerida",
              })}
            >
              {regiones &&
                Object.entries(regiones.regiones).map(([key, value]) => (
                  <IonSelectOption key={key} value={key}>
                    {value.nombre}
                  </IonSelectOption>
                ))}
            </IonSelect>
          </IonItem>
          {errors.region && (
            <IonText className="error-text">{errors.region.message}</IonText>
          )}

          <IonItem className="custom-item">
            <IonSelect
              interface="action-sheet"
              placeholder="Seleccione su comuna"
              disabled={!regSel}
              {...register("comuna", {
                required: "La comuna es requerida",
              })}
            >
              {regSel &&
                regSel.comunas.map((comuna) => (
                  <IonSelectOption key={comuna} value={comuna}>
                    {comuna}
                  </IonSelectOption>
                ))}
            </IonSelect>
          </IonItem>
          {errors.comuna && (
            <IonText className="error-text">{errors.comuna.message}</IonText>
          )}

          <IonItem className="ion-margin-vertical toc" lines="none">
            <IonToggle
              checked={tycChecked}
              onIonChange={() => setTycChecked(!tycChecked)}
            >
              Acepto los términos y condiciones
            </IonToggle>
            {!tycChecked && (
              <IonText color="danger" className="error-text">
                (requerido)
              </IonText>
            )}
          </IonItem>

          <IonButton
            expand="full"
            type="submit"
            className="submit-button"
            disabled={!isValid || !tycChecked}
          >
            Registrarse
          </IonButton>
        </form>
      </IonContent>
    </IonPage>
  );
};

export default Formulario;
