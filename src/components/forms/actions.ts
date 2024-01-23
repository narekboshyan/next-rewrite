    type validateFormType = {
        success: boolean;
        message: string;
    }; 
  
    export const submitGetinTouchForm = async (previousState: validateFormType, formData: FormData) => {
        const name = formData.get('name')?.toString();;
    
        return { success: true, message: 'ok' };
    };